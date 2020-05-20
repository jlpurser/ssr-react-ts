const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
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
};

module.exports = merge(baseConfig, config);
