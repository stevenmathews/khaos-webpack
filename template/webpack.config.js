const createConfig = require('hjs-webpack')
const configOptions = require('./webpack_config/config-options')
const config = createConfig(configOptions)

module.exports = config
