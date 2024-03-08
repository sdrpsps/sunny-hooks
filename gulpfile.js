/* eslint-disable @typescript-eslint/no-require-imports */
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const fse = require('fs-extra');

// 清理上一次打包的产物
gulp.task('clean', async () => {
  ['es', 'lib', 'dist'].forEach((path) => {
    fse.removeSync(path);
  });
});

// // 编译 esm, ts -> esm -> babel -> dist
gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.prod.json', {
    module: 'ESNext',
  });

  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 编译 cjs, 根据编译完的 es 生成 cjs
gulp.task('cjs', () => {
  return gulp
    .src(['es/**/*.js'])
    .pipe(babel({ configFile: '../../.babelrc' }))
    .pipe(gulp.dest('lib/'));
});

// 编译类型声明, ts -> declaration
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.prod.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });

  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// 复制 README.md
gulp.task('copy-readme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

// exports.default = gulp.series('clean');
exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copy-readme');
