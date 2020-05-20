const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
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
  // read packages at run time
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
