'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Repositorios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

   
        
      name: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
        validate:{
          notEmpty: {
            msg:"Esse campo não pode ser vazio"
          },
        }
      },
      url: {
        type: Sequelize.STRING,
       unique:true,
        allowNull: false,
        validate:{
          isUrl: {
            msg:"Esse campo não é url"
          },
        }
      },
  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Repositorios');
  }
};