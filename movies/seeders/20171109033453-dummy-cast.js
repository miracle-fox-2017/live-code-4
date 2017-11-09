'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Casts', [{
        first_name: 'John',
        last_name : ' Doe',
        birth_year: 1990,
        gender: 'male'
      },
      {
        first_name: 'MIli',
        last_name : ' oke',
        birth_year: 1990,
        gender: 'female'
      },
      {
        first_name: 'Miller',
        last_name : ' Susana',
        birth_year: 1991,
        gender: 'female'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
