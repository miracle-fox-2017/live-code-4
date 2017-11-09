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
      first_name: 'Yofri',
      last_name: 'Adi',
      birth_year: 1994,
      gender: 'male'
    }, {
      first_name: 'Adi',
      last_name: 'Yahya',
      birth_year: 1994,
      gender: 'male'
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
