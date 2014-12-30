# fripost-git

Parse git repository names from [`http://git.fripost.org/`](http://git.fripost.org) and return the names in an array.

Prints the git urls to stdout if used as a cli tool.

## Usage

```js
var fripost = require('fripost-git')
fripost(function (err, repos) {
  repos.forEach(function (repo) {
    console.log('https://git.fripost.org/pub/' + repo)
  })
})
```

```
https://git.fripost.org/pub/fripost-docs.git
https://git.fripost.org/pub/fripost-meetings.git
https://git.fripost.org/pub/fripost-propaganda.git
https://git.fripost.org/pub/fripost-tools.git
https://git.fripost.org/pub/fripost-web.git
https://git.fripost.org/pub/fripost-wiki.git
```

## Install

```
$ npm install fripost-git [-g]
```

## Licence

MIT