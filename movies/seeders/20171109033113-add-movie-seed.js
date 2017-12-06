'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', 
    [{
      name : 'Cintaku Kepentok Sudoku',
      released_year : 2016,
      genre : 'komedi',
      createdAt : new Date(),
      updatedAt : new Date()
    }, 
    {
      name : 'Ratapan di Depan Mac Mini',
      released_year : 2014,
      genre : 'drama',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'The Haunting Anchor',
      released_year : 2011,
      genre : 'horor',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Taubat Instruktur Karena Tugas Tak Dibuat',
      released_year : 2000,
      genre : 'religi',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Heroku wa Heromu da',
      released_year : 2008,
      genre : 'animasi',
      createdAt : new Date(),
      updatedAt : new Date()
    }],    
    {});    
  },

  down: (queryInterface, Sequelize) => {

    queryInterface.bulkDelete('Movies', 
    [{
      name :'Cintaku Kepentok Sudoku'
    }],
    [{
      name :'Ratapan di Depan Mac Mini'
    }],
    [{
      name :'The Haunting Anchor'
    }],
    [{
      name :'Taubat Instruktur Karena Tugas Tak Dibuat'
    }],
    [{
      name :'Heroku wa Heromu da'
    }])

  }
};

