const http = require('http')
const server = http.createServer()

const daysOfWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
]

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == '/echo') {
    let body = []
    req
      .on('data', (chunk) => {
        body.push(chunk)
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        body = Buffer.concat(body).toString().split('-')
        const day = body[2]
        const month = body[1] - 1
        const year = body[0]
        const date = new Date(year, month, day)
        const myDay = daysOfWeek[date.getDay() - 1]

        res.end('Naciste un ' + myDay)
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Server in the url htto://localhost:8001')
