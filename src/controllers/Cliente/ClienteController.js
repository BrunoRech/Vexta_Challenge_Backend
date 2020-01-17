const Cliente = require('../../models/Cliente');
const { Op } = require('sequelize');
const Axios = require('axios');

module.exports = {
    async index(req, res) {
        const { nome, endereco, cnpj, municipio, estado } = req.query;
        const cliente = await Cliente.findAll({
            attributes: ['id', 'nome', 'endereco', 'cnpj', 'created_at', 'updated_at'],
            include: {
                attributes: ['id', 'nome', 'estado'],
                association: 'municipio',
                where: {
                    [Op.and]: [
                        estado ? { estado } : null,
                        municipio ? { nome: municipio } : null,
                    ]
                }
            },
            where: {
                [Op.and]: [
                    nome ? { nome } : null,
                    endereco ? { endereco } : null,
                    cnpj ? { cnpj } : null,
                ]
            }
        });
        res.json(cliente);
    },

    async show(req, res) {
        const { cliente_id } = req.params;
        const cliente = await Cliente.findByPk(cliente_id, {
            attributes: ['id', 'nome', 'endereco', 'cnpj', 'created_at', 'updated_at'],
            include: {
                attributes: ['id', 'nome', 'estado'],
                association: 'municipio'
            }
        });
        if (!cliente) {
            return res.status(400).json({ message: 'Cliente não foi encontrado' });
        }
        res.json(cliente);
    },

    async store(req, res) {
        const { nome, municipio_id, endereco, cnpj } = req.body;
        const { data } = await Axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
        const { status, message } = data;
        if (status === 'ERROR') {
            return res.status(400).json({ message });
        }
        const cliente = await Cliente.create({ nome, municipio_id, endereco, cnpj });
        return res.json(cliente);
    },

    async update(req, res) {
        const { cliente_id } = req.params;
        const { nome, municipio_id, endereco, cnpj } = req.body;
        await Cliente.update({ nome, municipio_id, endereco, cnpj }, {
            where: {
                id: cliente_id
            }
        });
        res.send();
    },

    async destroy(req, res) {
        const { cliente_id } = req.params;
        await Cliente.destroy({
            where: {
                id: cliente_id,
            }
        });
        return res.send();
    },
}