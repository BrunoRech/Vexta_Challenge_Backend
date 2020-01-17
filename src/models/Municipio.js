const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            estado: DataTypes.STRING,
        },{
            sequelize: connection,
        });
    }

    static associate(models){
        this.hasMany(models.Cliente, {
            foreignKey: 'municipio'
        });
    }
}

module.exports = Municipio;