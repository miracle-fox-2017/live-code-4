'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      name: 'Cintaku Kepentok Sudoku',
      released_year: 2016,
      genre: 'komedi',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Ratapan di Depan Mac Mini',
      released_year: 2014,
      genre: 'drama',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Boggle 2, The Haunting Anchor',
      released_year: 2011,
      genre: 'horor',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Taubat Instruktur Karena Tugas Tak Dibuat',
      released_year: 2000,
      genre: 'religi',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Heroku wa Heromu da',
      released_year: 2008,
      genre: 'animasi',
      createdAt: new Date,
      updatedAt: new Date
    }]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
