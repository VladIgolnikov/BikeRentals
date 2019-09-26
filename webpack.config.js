const webpack = require('webpack');
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'client/src');
const BUILD_DIR = path.resolve(__dirname, 'client/dist');

const config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
