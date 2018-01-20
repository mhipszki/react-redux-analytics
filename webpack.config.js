const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.jsx',
  output: {
    path: build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        include: [src],
        exclude: [],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              'env',
              {
                modules: false,
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                },
                useBuiltIns: 'usage'
              }
            ],
            'react',
            'stage-3'
          ],
          plugins: [['styled-components', [{ ssr: false, minify: false }]]]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    alias: {
      src: src
    },
    extensions: ['.js', '.json', '.jsx']
  },
  target: 'web',
  externals: [],
  devServer: {
    contentBase: build
  }
};
