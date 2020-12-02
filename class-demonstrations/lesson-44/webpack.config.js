const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new HtmlWebpackPlugin({
    title: 'Lesson 44 - Webpack',
    template: './src/index.html'
  })
];

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  }
};