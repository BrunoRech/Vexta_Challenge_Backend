const express = require('express');
const MunicipioController = require('./MunicipioController');

const routes = express.Router();

routes.get('/', MunicipioController.index);
routes.post('/', MunicipioController.store);
routes.get('/:municipio_id', MunicipioController.show);
routes.put('/:municipio_id', MunicipioController.update);
routes.delete('/:municipio_id', MunicipioController.destroy);

module.exports = routes;