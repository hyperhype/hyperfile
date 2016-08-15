# hyperfile-input


get a file raw file into the browser

``` js

var hyperfile = require('hyperfile')

document.body.appendChild(hyperfile(function (buffer) {
  //called with a raw array-buffer whenever the user selects a file.
}))
```

or get the file as an dataurl. (useful for writing to a canvas)

``` js

var hyperfile = require('hyperfile')

document.body.appendChild(hyperfile.asDataURL(function (dataurl) {
  //called with a raw buffer whenever the user selects a file.
}))
```

This does not use a `cb(err, data)` signature, because it may callback multiple times.


## License

MIT
