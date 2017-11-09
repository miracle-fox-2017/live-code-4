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
    return queryInterface.bulkInsert('Movies', [{
      name : 'Cintaku Kepentok Sudoku',
      released_year : '2016',
      genre : 'Komedi',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Ratapan Didepan Mac Mini',
      released_year : '2014',
      genre : 'Drama',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Boogle 2, The Haunting Anchor',
      released_year : '2011',
      genre : 'Horor',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Taubat Instruktur Karena Tugas Tak Dibuat',
      released_year : '2000 ',
      genre : 'Religi',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name : 'Heroku wa Heromu da',
      released_year : '2008',
      genre : 'Animasi',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
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
