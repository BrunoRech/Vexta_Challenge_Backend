const Sequelize = require('sequelize');
const Config = require('../config/database');

const connection = new Sequelize(Config);

module.exports = connection;