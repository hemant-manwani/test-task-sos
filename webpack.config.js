'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

const applicationEntries = process.env.NODE_ENV === 'development'
  ? ['webpack-hot-middleware/client?reload=true']
  : [];

module.exports = {
  entry: ['./src/main.jsx'].concat(applicationEntries),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    alias: {
      config: path.join(__dirname, 'config', 'config.' + process.env.NODE_ENV + '.js')
    },
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.json',
      '.jsx'
    ]
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: {index: '/'}
  },

  module: {

    loaders: [
      loaders.jsx,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.png,
      loaders.jpg,
      loaders.json
    ]
  },

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true
  },

};
