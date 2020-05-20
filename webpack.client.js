const path = require('path');

module.exports = {
  // root file of render server
  entry: './src/client/client.tsx',
  // location of build file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
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
