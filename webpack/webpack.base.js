const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwind = require('tailwindcss');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下filename: '[name].[hash:8].js', // 打包的文件名},
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [{
      test: /.(js?)|(ts?)x$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ]
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: { postcssOptions: { plugins: [tailwind] } }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html', }),
  ]
};