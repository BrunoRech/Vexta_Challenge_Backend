const Sequelize = require('sequelize');
const Config = require('../config/database');
const Municipio = require('../models/Municipio');
const Cliente = require('../models/Cliente');

const connection = new Sequelize(Config);
const { models } = connection;

Municipio.init(connection);
Cliente.init(connection);

Municipio.associate(models);
Cliente.associate(models);

module.exports = connection;