'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Movies', [{
        name: 'Cintaku Kepentok Sudoku',
        release_year: 2016,
        genre:'Komedi'
      },{
        name: 'Ratapan di Depan Mac Mini',
        release_year: 2014,
        genre:'Drama'

      },{
        name: 'Boggle 2, The Haunting Anchor',
        release_year: 2011,
        genre:'Horror'
      },{
        name: 'Taubat Instruktur Karena Tugas Tak Dibuat',
        release_year: 2000,
        genre:'Religi'
      },{
        name: 'Heroku wa Heromu da',
        release_year: 2008,
        genre:'Animasi'

      }])

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', [{
        name: 'Cintaku Kepentok Sudoku',
        release_year: 2016,
        genre:'Komedi'
      },{
        name: 'Ratapan di Depan Mac Mini',
        release_year: 2014,
        genre:'Drama'

      },{
        name: 'Boggle 2, The Haunting Anchor',
        release_year: 2011,
        genre:'Horror'
      },{
        name: 'Taubat Instruktur Karena Tugas Tak Dibuat',
        release_year: 2000,
        genre:'Religi'
      },{
        name: 'Heroku wa Heromu da',
        release_year: 2008,
        genre:'Animasi'

      }])
    }
}
