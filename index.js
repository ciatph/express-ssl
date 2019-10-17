const express = require('express')
const PORT = process.env.PORT || 3000
const PORT_SSL = 8443
const http = require('http')
const https = require('https')
const fs = require('fs')
const app = express()

// ssl certs
const privateKey = fs.readFileSync('sslcerts/server.key', 'utf8')
const certificate = fs.readFileSync('sslcerts/server.cert', 'utf8')
const credentials = {
  key: privateKey,
  cert: certificate
}

app.get('/', (req, res) => {
  res.sendStatus(200)
})

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

httpsServer.listen(PORT_SSL, () => {
  console.log(`listening on https://localhost:${PORT_SSL}`)
})