const path = require('path');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'i18n-jsfp',
    libraryTarget: 'umd',
  },
  externals: {
    immer: {
      commonjs: 'immer',
      commonjs2: 'immer',
      amd: 'immer',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
    },
    redux: {
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
    },
    yup: {
      commonjs: 'yup',
      commonjs2: 'yup',
      amd: 'yup',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
