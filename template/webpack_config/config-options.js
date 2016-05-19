const layout = require('./prerender/layout')
const head = require('./prerender/head')

const configOptions = {
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  isDev: process.env.NODE_ENV !== 'production',
  html: (data) => {
    return {
      'index.html': data.defaultTemplate({head: head, html: layout})
    }
  },
  hostname: '{{hostname}}.local'
}

module.exports = configOptions
