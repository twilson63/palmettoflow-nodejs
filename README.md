# palmettoflow nodejs

An internal adapter for using palmetto flow wihin a nodejs application. It enables developers to build palmettoflow microservices without having to separate them from the application immediately. It also allows for developers to create microsservices on the browser.

## What is palmetto flow?

[See Palmetto Flow](https://github.com/twilson63/palmettoflow)

## NodeJS Adapter

### Usage

client

``` js
var newEvent require('palmettoflow-event').newEvent
var palmetto = require('palmettoflow-nodejs')
var ee = palmetto()
var e = newEvent('foo', 'bar', { baz: 'bop'})

ee.once(e.from, function (event) {
  // handle response here  
})

ee.emit('send', e)
```

service

``` js
var response = require('palmettoflow-event').response
module.exports = function (ee) {
  ee.on('/foo/bar', function (event) {
    // process return results
    ee.emit('send', response(event, { ok: true}))
  })
}
```