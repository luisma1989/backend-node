const express = require('express')
const app = express()

const { config } = require('./config')

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/json', function (req, res) {
  res.json({ hello: 'Hello world' })
})

app.listen(config.port, function () {
  console.log(`Corriendo en el puerto ${config.port}`)
})
