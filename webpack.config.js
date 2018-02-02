const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './examples/'),
        publicPath: '/examples/',
        filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.scss', '.js', '.vue', '.json'],
    alias: {
      '@faint': path.join(__dirname, '/packages/faint.scss'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: 'Faint css framework',
      filename: '../index.html',
      template: './index.tpl'
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    overlay: true,
    contentBase: path.join(__dirname, ''),
    overlay: true,
    port: 8880
  }
}
