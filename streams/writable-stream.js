// Writeable
// * Eventos
//   drain.Se dispara cuando emite datos.
//   finish.Se dispara cuando termina de emitir.
//   error.Se dispara cuando hay un error.
// * Funciones
//   - write
//   - end
// Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter.

const { Writable } = require('stream')

const wirtebleStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  },
})

process.stdin.pipe(wirtebleStream)
