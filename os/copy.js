const fs = require('fs')

fs.copyFile('luisma.txt', 'luismaCopy.txt', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('archivo copiado')
})
