const Sequelize = require('sequelize');
const Config = require('../config/database');
const Municipio = require('../models/Municipio');
const Cliente = require('../models/Cliente');

const connection = new Sequelize(Config);

Municipio.init(connection);
Cliente.init(connection);

Municipio.associate(connection.models);

module.exports = connection;