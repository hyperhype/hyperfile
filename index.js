var h = require('hyperscript')

function select (ready) {
  return h('input', {type: 'file', onchange: function (ev) {
    var file = ev.target.files[0]
    ready(new FileReader(), file)
  }})

}

module.exports = function (onFile) {
  return select(function (reader) {
    reader.onload = function () {
      onFile(new Buffer(reader.result))
    }
    reader.readAsArrayBuffer(file)
  })
}

module.exports.asDataURL = function (onFile) {
  return select(function (reader, file) {
    reader.onload = function () {
      onFile(reader.result)
    }
    reader.readAsDataURL(file)
  })
}


