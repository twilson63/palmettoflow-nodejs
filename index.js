var EventEmitter = require('events')

var ee = (ee = global.ee) != null ? ee : (new EventEmitter()).setMaxListeners(0)
var listening = false

function palmetto () {
  // only one listener to `send`!
  if (!listening) {
    listening = true
    ee.on('send', function (event) {
      ee.emit(event.to, event)
    })
  }
  
  return ee
}

module.exports = palmetto

