'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Cast.belongsToMany(Movie, {through: 'MovieCast'});
        // Movie.belongsToMany(Cast, {through: 'MovieCast'});
      }
    }
  });

  return Movie;
};