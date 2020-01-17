const joi = require('joi');

module.exports = {
    body: {
        nome: joi
        .string()
        .trim()
        .required()
        .label('Nome'),

        estado: joi
        .string()
        .trim()
        .required()
        .label('Estado'),

    }
}