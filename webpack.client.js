const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
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
};

module.exports = merge(baseConfig, config);
