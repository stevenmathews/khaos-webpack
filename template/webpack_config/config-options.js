var layout = require('./prerender/layout')
var head = require('./prerender/head')

var configOptions = {
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({head: head, html: layout})
    }
  },
  hostname: '{{hostname}}.local'
}

module.exports = configOptions
