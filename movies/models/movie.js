'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    release_year: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Movie.associate = function(models) {
      Movie.hasMany(models.MovieCast)
      Movie.belongsToMany(models.Cast, {through: 'MovieCast'})
  }
  return Movie;
};
