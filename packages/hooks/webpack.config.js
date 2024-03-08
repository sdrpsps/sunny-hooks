/* eslint-disable @typescript-eslint/no-require-imports */
const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'sunnyHooks.js',
    library: 'sunnyHooks',
    path: path.resolve(__dirname, './dist'),
  },
});
