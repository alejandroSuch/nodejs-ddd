import fs from 'fs';
import _ from 'lodash';

var properties = []

fs.readFile('db.json', {encoding: 'utf8'}, function (err, data) {
  if (err) throw err

  JSON.parse(data).forEach(function (property) {
    properties.push(property)
  })

})

export default class PropertyRepository {
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