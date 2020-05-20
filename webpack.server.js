const path = require('path');

module.exports = {
  // bundle for node.js
  target: 'node',
  // root file of render server
  entry: './src/index.ts',
  // location of build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // resolver for filt paths
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // run loader on every file
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
