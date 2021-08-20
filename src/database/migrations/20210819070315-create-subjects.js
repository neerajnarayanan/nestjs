'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      level_name: {
        type: Sequelize.STRING,
      },
      subject_name: {
        type: Sequelize.STRING,
      },
      // level_id: {
      //   type: Sequelize.INTEGER,
      //   // references: {
      //   //   table: 'levels',
      //   //   field: 'id',
      //   // },
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subjects');
  }
};