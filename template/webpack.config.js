const getConfig = require('hjs-webpack')
const head = require('./src/prerender/head')
const layout = require('./src/prerender/layout')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({head: head, html: layout})
    }
  }
})
