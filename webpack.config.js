const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/public/index.html'
    })
  ]
};
