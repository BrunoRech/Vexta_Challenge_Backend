const joi = require('joi');

module.exports = {
    body: {
        nome: joi
        .string()
        .trim()
        .required()
        .label('Nome'),

        endereco: joi
        .string()
        .trim()
        .required()
        .label('Endereco'),

        cnpj: joi
        .string()
        .trim()
        .required()
        .label('Cnpj'),

        municipio_id: joi
        .number()
        .positive()
        .integer()
        .label('Municipio Id'),

    }
}