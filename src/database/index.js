const Sequelize = require('sequelize');
const Config = require('../config/database');
const Municipio = require('../models/Municipio');

const connection = new Sequelize(Config);

Municipio.init(connection);

module.exports = connection;