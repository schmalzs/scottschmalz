const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { DefinePlugin } = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        exclude: /node_modules/,
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new FaviconsWebpackPlugin('./src/client/static/images/icon.png')
  ]
});
