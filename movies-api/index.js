const express = require('express')
const app = express()

const { config } = require('./config')
const moviesApi = require('./routes/movies')

moviesApi(app)

app.listen(config.port, function () {
  console.log(`Corriendo en el puerto ${config.port}`)
})
