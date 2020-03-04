const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { helpers } = require('./helpers')

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: helpers.parse('helpers.source/config.js.src/index.js'),
    foftFontLoading: helpers.parse('helpers.source/config.js.src/foftFontLoading.js')
  },
  output: {
    path: path.resolve(`${__dirname}/${helpers.parse('helpers.dist/config.js.dist/')}`),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }
    ]
  }
}
