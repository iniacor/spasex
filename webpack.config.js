/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: './src/main.tsx',
    output: {
      filename: 'bundle.js',
      assetModuleFilename: 'images/[name][ext][query]',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext][query]',
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.(ts|js)x?$/,
          include: [path.resolve(__dirname, 'src/assets')],
          use: ['@svgr/webpack'],
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/, // exclude CSS modules
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    stats: {
      children: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: '_redirects', to: '', noErrorOnMissing: true },
          { from: 'src/assets/icons', to: 'icons' },
          { from: 'src/assets/images', to: 'images' },
        ],
      }),
      new Dotenv(),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@theme/*': path.resolve(__dirname, 'src/theme/*'),
      },
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3000,
      static: {
        directory: path.join(__dirname, '/'),
      },
    },
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      })
    );
  }

  return config;
};
