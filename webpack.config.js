const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,
  entry: ['./src/js/App.js', ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].bundle.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new CopyPlugin({
        patterns: [{
          from: 'src/*.html',
          to: '[name].[ext]',
        }, {
          from: 'src/assets/',
          to: '[name][contenthash].[ext]',
        }],
      }),
    ],
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          url: false,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              ['autoprefixer'],
            ],
          },
        },
      }, {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
        },
      }, ],
    }, ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name][contenthash].bundle.css',
    }),
  ],
  devServer: {
    contentBase: [
      path.join(__dirname, '/src'),
    ],
    watchContentBase: true,
    compress: true,
    port: 9000,
    open: true,
  },
});