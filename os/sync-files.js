// Sistema operativo y sistema de archivos

// os.Sirve para consultar y manejar los recursos del sistema operativo.
// fs.Sirve para administrar(copiar, crear, borrar etc.) archivos
//    y directorios.
// Los métodos contenidos en estos módulos(y en todo Node.js) funcionan
// de forma asíncrona por default, pero también se pueden ejecutar de
// forma síncrona, por ejemplo el método readFile() tiene su versión
// síncrona readFileSync().
const fs = require('fs')

try {
  const file = process.argv[2]
  const content = fs.readFileSync(file).toString()
  const lines = content.split('\n').length

  console.log(lines)
} catch (err) {
  return console.log(err)
}
