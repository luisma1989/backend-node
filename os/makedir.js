const fs = require('fs')

fs.mkdir('directory/luisma', { recursive: true }, (err) => {
  if (err) {
    return console.log(err)
  }
})
