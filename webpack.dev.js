const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

process.env.NODE_ENV = 'development'

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    compress: true,
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
})
