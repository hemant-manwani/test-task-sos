'use strict';

exports.jsx = {
  test: /\.js(x?)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

// exports.eslint = {
//   test: /\.js(x?)$/,
//   exclude: /node_modules/,
//   loader: 'eslint-loader'
// }

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loaders: [
    'style-loader?sourceMap',
    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
  ],
  exclude: /node_modules/,
};

exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);
exports.png = makeUrlLoader(/\.png$/);
exports.jpg = makeUrlLoader(/\.jpg$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url-loader',
    exclude: /node_modules/,
  };
}
