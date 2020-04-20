// Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:

// Readable
// * Eventos
//     data.Se dispara cuando recibe datos.
//     end.Se dispara cuando termina de recibir datos.
//     error.Se dispara cuando hay un error.
// * Funciones
// -   pipe
// -   unpipe
// -   read
// -   push

const { Readable } = require('stream')

const readableStream = new Readable()

readableStream.push(`${0 / 0} `.repeat(10).concat('Batman, Batman!'))
readableStream.push(null)

readableStream.pipe(process.stdout)
