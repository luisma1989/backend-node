// Los Streams son una colección de datos como los arrays o
// strings sólo que se van procesando pedazo por pedazo, esta
// capacidad los hace muy poderosos porque podemos manejar una
// gran cantidad de datos de manera óptima.
const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big')
  src.pipe(res)
})

server.listen(3000)
