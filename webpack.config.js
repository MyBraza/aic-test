const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const {NODE_ENV} = process.env;

const IS_DEV = NODE_ENV !== 'production';

module.exports = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : false,
  entry: [path.join(__dirname, '/src/index.tsx')],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './www/index.html'})]
};
