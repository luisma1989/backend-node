const fs = require('fs')

// __dirname info del directorio actual
const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err)
  }
  console.log(files)
})
