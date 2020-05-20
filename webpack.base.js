module.exports = {
  // run loader on every file
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts or .tsx
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
