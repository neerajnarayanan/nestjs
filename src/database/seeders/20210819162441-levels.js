'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Levels',
      [
        {
          level_name: 'Primary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level_name: 'Secondary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          level_name: 'Tertiary',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Levels', null, {});
  },
};
