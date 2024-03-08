/* eslint-disable @typescript-eslint/no-require-imports */
const common = require('../../gulpfile');
const gulp = require('gulp');
const fse = require('fs-extra');
const fg = require('fast-glob');
const gm = require('gray-matter');

// 读取 markdown 生成 hooks 说明
async function genDesc(markdownPath) {
  if (!fse.existsSync(markdownPath)) {
    return;
  }
  const markdown = fse.readFileSync(markdownPath, 'utf8');
  const { content } = gm(markdown);

  let description = (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}

// 生成 metadata json
async function genMetaData() {
  const metadata = {
    hooks: [],
  };
  // hooks 文件夹列表
  const hooksList = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  // 读取各个 hook 的 index.md
  await Promise.allSettled(
    hooksList.map(async (hook) => {
      const description = await genDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metadata.hooks = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });

  return metadata;
}

// 生成 hooks 说明
gulp.task('metadata', async () => {
  const metadata = await genMetaData();
  await fse.writeJSON('./metadata.json', metadata, { spaces: 2 });
});

// exports.default = gulp.series(common.default);
exports.default = gulp.series(common.default, 'metadata');
