var PropertyViewRequest = require('../../Application/Service/Property/PropertyViewRequest');
var PropertyViewService = require('../../Application/Service/Property/PropertyViewService');
var PropertyRepository = require('../Domain/Model/PropertyRepository');
var JSONSearchPropertiesPerCityQuery = require('../../Application/Query/JSONSearchPropertiesPerCityQuery');

var express = require('express')
var app = express()

var jwt = 'carlos'

app.get('/property/:id', function (req, res) {
    console.log(new PropertyViewService(new PropertyRepository()).execute(new PropertyViewRequest(req.params.id, jwt)))
})

app.get('/property/city/:city', function (req, res) {
    console.log(new JSONSearchPropertiesPerCityQuery(req.params.city))
})

var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port)
})
