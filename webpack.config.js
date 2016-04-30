var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devServer: {
    outputPath: path.join(__dirname, 'dist'),
    colors: false
  },
  devtool: "source-map",
  entry: {
    app: ['./src/app.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/public' }])],
  resolve: {
    extensions: ['', '.ts']
  }
}