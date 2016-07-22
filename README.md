# hyperfile-input


get a file raw file into the browser

``` js

var hyperfile = require('hyperfile')


document.body.appendChild(hyperfile(function (buffer) {
  //called with a raw buffer whenever the user selects a file.
}))
```

## License

MIT
