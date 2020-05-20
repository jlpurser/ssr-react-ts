const path = require('path');

module.exports = {
  // bundle for node.js
  target: 'node',

  // root file of render server
  entry: './src/index.js',

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
        loader: 'ts-load',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
    ],
  },
};
