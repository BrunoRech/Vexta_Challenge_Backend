const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            estado: DataTypes.STRING,
        },{
            sequelize: connection,
        })
    }
}

module.exports = Municipio;