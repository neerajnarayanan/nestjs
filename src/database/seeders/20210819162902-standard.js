'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Standards',
      [
        {
          standard_name: '10th standard',
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          standard_name: '11th standard',
          subject_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          standard_name: '12th standard',
          subject_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          standard_name: '9th standard',
          subject_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          standard_name: '10th standard',
          subject_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Standards', null, {});
  },
};
