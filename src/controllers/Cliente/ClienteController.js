const Cliente =  require('../../models/Cliente');

module.exports = {
    async index(req,res){
        const cliente = await Cliente.findAll();
        res.json(cliente);
    },

    async show(req, res) {
        const { cliente_id } = req.params;
        const cliente = await Cliente.findByPk(cliente_id);
        if (!cliente) {
            return res.status(400).json({ message: 'Cliente não foi encontrado' });
        }
        res.json(cliente);
    },

    async store(req, res) {
        const { nome, municipio, endereco, cnpj } = req.body;
        const cliente = await Cliente.create({ nome, municipio, endereco, cnpj });
        return res.json(cliente);
    },

    async update(req, res) {
        const { cliente_id } = req.params;
        const { nome, municipio, endereco, cnpj } = req.body;
        await Cliente.update({ nome, municipio, endereco, cnpj }, {
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