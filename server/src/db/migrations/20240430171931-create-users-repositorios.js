'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Repositorios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type:Sequelize.INTEGER  ,
        allowNull: false,
        references:{
          model:'Users',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
    
        },
      repositorioId: {
        type:Sequelize.INTEGER  ,
        allowNull: false,
        references:{
          model:'Repositorios',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
    
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
    await queryInterface.dropTable('Users_Repositorios');
  }
};