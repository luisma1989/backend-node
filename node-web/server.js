const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  res.end('Luisma')
})

server.listen(8000)
console.log('Server in the url htto://localhost:8000')
