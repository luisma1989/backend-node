const asycnCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'hello world')
    }
    return cb(new Error('Hello error'))
  }, 2000)
}

asycnCallback((err, msg) => {
  if (err) {
    console.log('error', err)
  } else {
    console.log('message', msg)
  }
})
