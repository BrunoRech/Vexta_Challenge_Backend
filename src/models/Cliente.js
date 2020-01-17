const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            municipio: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        },{
            sequelize: connection,
        })
    }
}

module.exports = Municipio;