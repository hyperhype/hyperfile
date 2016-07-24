var h = require('hyperscript')

module.exports = function (onFile) {

  return h('input', {type: 'file', onchange: function (ev) {
    var file = ev.target.files[0]
    var reader = new FileReader()
    reader.onload = function () {
      onFile(new Buffer(reader.result))
    }
    reader.readAsArrayBuffer(file)
  }})

}
