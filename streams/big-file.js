const fs = require('fs') // file system module
const file = fs.createWriteStream('./big')

for (let i = 0; i < 1e6; i++) {
  file.write('luisma')
}

file.end()
