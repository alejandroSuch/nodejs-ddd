var fs = require('fs')
var _ = require('lodash')
var properties = []

fs.readFile('db.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (property) {
    properties.push(property)
  })

})

module.exports = class PropertyRepository {  
    ofId(id) {
      var object = null;

      properties.forEach(function (property) {
        if (property.id === id) {
          object = property
        }
      })

      return object
    }

    save(property) {
      // Not implemented
    }
  }