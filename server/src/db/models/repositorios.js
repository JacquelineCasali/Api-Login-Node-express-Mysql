"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Repositorios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsToMany n para n
      //CASCADE login deletado todos repositorios deletado
      //as nomeando o relacinamento eu escolho o nome do as 
      //through nome que vai relacionar loja com produtos (nome das tabelas com id)
      this.belongsToMany(models.Users,{
        foreignKey:'repositorioId',
        through:'Users_Repositorios',
           as:'login',
      onUpdate:'CASCADE',
      onDelete:'CASCADE'})
    }
  }
  Repositorios.init(
    {
        name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio",
          },
        },
      },
      url: {
        type: DataTypes.STRING,
           allowNull: false,
           unique:true,
        validate: {
          isUrl: {
            msg: "Esse campo não é url",
          },
        },
      },

      // required:true,
    },

    {
      sequelize,
      modelName: "Repositorios",
    }
  );

  return Repositorios;
};
