var webpack = require('webpack')
var validator = require('webpack-validator')
var merge = require('webpack-merge')
var path = require('path')

var SRC_PATH = path.resolve('./src/index.js')
var DIST_PATH = path.resolve('./build')
var SRC_DIR_PATH = path.resolve('./src')

var template = require('html-webpack-template')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin

var dev = {
  entry: SRC_PATH,
  output: {
    filename: 'bundle.js',
    path: DIST_PATH
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'standard',
        include: SRC_DIR_PATH
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: SRC_DIR_PATH
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: process.env.DEV_SERVER_PORT || 3010,
    host: process.env.DEV_SERVER_HOST || '0.0.0.0',
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: DIST_PATH,
    stats: 'errors-only',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    compress: true
  },
  plugins: [
    new HotModuleReplacementPlugin({
      multiStep: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      mobile: true,
      appMountId: 'root',
      template: template,
      devServer: 3010
    })
  ]
}

module.exports = validator(dev)
