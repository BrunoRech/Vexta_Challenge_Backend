const joi = require('joi');

module.exports = {
    body: {
        nome: joi
        .string()
        .trim()
        .required()
        .error(() => {
            return { error: 'Nome em branco' }
        }),

        estado: joi
        .string()
        .trim()
        .required()
        .error(() => {
            return { error: 'Estado em branco' }
        }),
    }
}