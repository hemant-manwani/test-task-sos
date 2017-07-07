'use strict';

const webpack = require('webpack');
const util = require('./util');

const shouldOptimize = util.isProduction;

const postcssBasePlugins = [
  require('postcss-modules-local-by-default'),
  require('postcss-import')({
    addDependencyTo: webpack,
  }),
  require('postcss-cssnext'),
  require('autoprefixer')({ browsers: ['last 2 versions'] })
];

const optimizePlugins = [
  require('cssnano')({
    safe: true,
    sourcemap: true,
    autoprefixer: false,
  }),
];

const postCssPlugins = postcssBasePlugins
  .concat(shouldOptimize ? optimizePlugins : []);

module.exports = () => {
  return postCssPlugins;
};
