#!/usr/bin/env node
var jsdom = require('jsdom')
var url = 'http://git.fripost.org/?a=project_index'
var hyperquest = require('hyperquest')

function getNames(cb) {
  var names = []
  var req = hyperquest(url)
  req.on('data', function (data) {
    names.push(data.toString().split(' ')[0])
  })
  req.on('end', function (res) {
    cb(null, names)
  })
  req.on('error', cb)
}

module.exports = getNames

if (!module.parent) {
  getNames(function (err, repos) {
    if (err) return console.error(err)
    repos.forEach(function (repo) {
      console.log('https://git.fripost.org/pub/' + repo)
    })
  })
}

