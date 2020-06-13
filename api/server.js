const { createServer } = require('http')

createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ success: true, app: process.env.APP_NAME }))
}).listen(process.env.APP_PORT || 80)