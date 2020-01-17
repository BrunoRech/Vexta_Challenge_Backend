const Municipio = require('../../models/Municipio');
const { Op } = require('sequelize');

module.exports = {
    async index(req, res) {
        const {estado, nome} = req.query;
        const municipio = await Municipio.findAll({
            where: {
                [Op.and]: [
                    estado ? { estado } : null,
                    nome ? { nome } : null,
                ]
            }
        });
        res.json(municipio);
    },

    async show(req, res) {
        const { municipio_id } = req.params;
        const municipio = await Municipio.findByPk(municipio_id);
        if (!municipio) {
            return res.status(400).json({ message: 'Municipio não foi encontrado' });
        }
        res.json(municipio);
    },

    async store(req, res) {
        const { nome, estado } = req.body;
        const municipio = await Municipio.create({ nome, estado });
        return res.json(municipio);
    },

    async update(req, res) {
        const { municipio_id } = req.params;
        const { nome, estado } = req.body;  
        await Municipio.update({ nome, estado }, {
            where: {
                id: municipio_id
            }
        });
        res.send();
    },

    async destroy(req, res) {
        const { municipio_id } = req.params;
        await Municipio.destroy({
            where: {
                id: municipio_id,
            }
        });
        return res.send();
    },
}