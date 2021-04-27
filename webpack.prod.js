const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const prod = require('./webpack.netlify');

module.exports = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
  ],
});
