const Axios = require('axios');

module.exports = {
    async find(req, res) {
        try {
            const { cnpj } = req.params;
            const { data } = await Axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
            const { status, message } = data;
            if (status === 'ERROR') {
                return res.json({ error: message });
            }
            res.json(data);
        } catch (err) {
            console.log('erro cnpj controller')
            res.json(erro);
        }
    }
};