const express = require('express');
const CnpjController = require('./CnpjController');

const routes = express.Router();

routes.get('/find/:cnpj', CnpjController.find);

module.exports = routes;