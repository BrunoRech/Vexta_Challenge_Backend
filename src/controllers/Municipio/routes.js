const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const MunicipioController = require('./MunicipioController');
const MunicipioValidator = require('../../validators/MunicipioValidator');

const routes = express.Router();

routes.get('/', MunicipioController.index);
routes.post('/',validate(MunicipioValidator), handle(MunicipioController.store));
routes.get('/:municipio_id', MunicipioController.show);
routes.put('/:municipio_id', validate(MunicipioValidator), handle(MunicipioController.update));
routes.delete('/:municipio_id', MunicipioController.destroy);

module.exports = routes;