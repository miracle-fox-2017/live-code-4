'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    // order: [(Movie, "released_year"), "ASC"]
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Movie;
};
