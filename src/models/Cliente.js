const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            municipio: DataTypes.STRING,
            endereco: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        },{
            sequelize: connection,
            tableName: 'clientes'
        });
    }

    static associate(models){
        this.belongsTo(models.Municipio, {
            foreignKey: 'municipio',
        });
    }
}

module.exports = Cliente;