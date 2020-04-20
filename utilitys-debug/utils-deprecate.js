const util = require('util')

const hello = util.deprecate(() => {
  console.log('hello')
}, 'hello is deprecated')

hello()
