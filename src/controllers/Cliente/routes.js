const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const ClienteController = require('./ClienteController');
const ClienteValidator = require('../../validators/ClienteValidator');

const routes = express.Router();

routes.get('/', ClienteController.index);
routes.post('/', validate(ClienteValidator), handle(ClienteController.store));
routes.get('/:cliente_id', ClienteController.show);
routes.put('/:cliente_id', validate(ClienteValidator), handle(ClienteController.update));
routes.delete('/:cliente_id', ClienteController.destroy);

module.exports = routes;