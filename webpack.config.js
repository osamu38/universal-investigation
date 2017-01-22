var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './public/javascripts/app.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join('public/javascripts/')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      }
    ]
  }
};
