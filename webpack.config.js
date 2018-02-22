var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './public/javascripts/app.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public/javascripts/')
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
