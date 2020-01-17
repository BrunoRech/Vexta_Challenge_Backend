const express = require('express');
const ClienteController = require('./ClienteController');

const routes = express.Router();

routes.get('/', ClienteController.index);
routes.post('/', ClienteController.store);
routes.get('/:cliente_id', ClienteController.show);
routes.put('/:cliente_id', ClienteController.update);
routes.delete('/:cliente_id', ClienteController.destroy);

module.exports = routes;