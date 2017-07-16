const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
  },
  resolve: {
    extensions: ['js'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
