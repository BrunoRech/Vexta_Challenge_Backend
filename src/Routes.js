const express = require('express');
const routes = express.Router();

routes.use('/clientes', require('./controllers/Cliente/routes'));
routes.use('/municipios', require('./controllers/Municipio/routes'));

module.exports = routes;