import PropertyViewRequest from '../../Application/Service/Property/PropertyViewRequest';
import PropertyViewService from '../../Application/Service/Property/PropertyViewService';
import PropertyRepository from '../Domain/Model/PropertyRepository';
import JSONSearchPropertiesPerCityQuery from '../../Application/Query/JSONSearchPropertiesPerCityQuery';

import express from 'express';

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
