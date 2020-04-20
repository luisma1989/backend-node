// %s string
// %d number
// %j json

console.log('Un %s y un %s', 'luisma', 'otra cosa')
// es igual a console.log
console.info('hola')
console.warn('warn es un alias de error')

console.assert(42 === '42')
console.trace('hola')

const util = require('util')

const debuglog = util.debuglog('developmet')
// solo se imprime si NODE_ENV=development
debuglog('hello from foo')
