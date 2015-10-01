var test = require('tap').test
var palmetto = require('../')

test('create pflow event', function (t) {

  var ee = palmetto()

  ee.on('foo', function (event) {
    t.ok(event.object.ok)
    t.end()
  })

  ee.emit('send', {
    to: 'foo',
    object: { ok: true }
  })
})