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
    return queryInterface.bulkInsert('MovieCasts', [{
      CastId: 1,
      MovieId: 1
    }, {
      CastId: 2,
      MovieId: 2
    }, {
      CastId: 1,
      MovieId: 3
    }, {
      CastId: 2,
      MovieId: 4
    }, {
      CastId: 1,
      MovieId: 5
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
