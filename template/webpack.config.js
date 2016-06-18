const createConfig = require('hjs-webpack')
const configOptions = require('./webpack_config/config-options')
const config = createConfig(configOptions)
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

config.plugins.push(
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: 3100,
      proxy: 'http://localhost:3000/'
    },
    {
      reload: false
    }
  ),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.NoErrorsPlugin()
)

module.exports = config
