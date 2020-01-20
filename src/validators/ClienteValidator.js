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
        endereco: joi
            .string()
            .trim()
            .required()
            .error(() => {
                return { error: 'Endereço em branco' }
            }),

        cnpj: joi
            .string()
            .trim()
            .required()
            .error(() => {
                return { error: 'Cnpj em branco' }
            }),

        municipio_id: joi
            .number()
            .positive()
            .integer()
            .error(() => {
                return { error: 'Município em inválido' }
            }),
    }
}