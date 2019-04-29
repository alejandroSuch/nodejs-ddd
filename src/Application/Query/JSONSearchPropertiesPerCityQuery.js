import fs from 'fs';
import _ from 'lodash';

var properties = [];

fs.readFile('db.json', { encoding: 'utf8' }, function(err, data) {
  if (err) throw err;

  JSON.parse(data).forEach(function(property) {
    if (property.city) properties.push(property);
  });
});

export default class JSONSearchPropertiesPerCityQuery {
  constructor(city) {
    var propertiesInCity = [];

    properties.forEach(function(property) {
      if (property.city === city) {
        propertiesInCity.push(property);
      }
    });

    return propertiesInCity;
  }
}
