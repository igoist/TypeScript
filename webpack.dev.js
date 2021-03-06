const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    // host: 'localhost',
    hot: true,
    inline: true,
    port: 3000,
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
