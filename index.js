#!/usr/bin/env node
var jsdom = require('jsdom')
var url = 'http://git.fripost.org/'
var selector = 'table > tbody > tr > td > a.list'

function getNames(cb) {
  jsdom.env({
    url: url,
    done: function (err, window) {
      if (err) return console.error(err)
      var result = []
      var list = window.document.querySelectorAll(selector)
      var length = list.length
      for (var i = 0; i < length; ++i) {
        var innerHTML = list[i].innerHTML
        if (innerHTML.length) result.push(innerHTML)
      }
      cb(null, result)
    }

  })
}

module.exports = getNames

if (!module.parent) {
  getNames(function (err, repos) {
    if (err) return process.stderr.write(err.toString())
    repos.forEach(function (repo) {
      console.log('https://git.fripost.org/pub/' + repo)
    })
  })
}
