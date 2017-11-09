'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    release_year: DataTypes.STRING,
    genre: DataTypes.STRING
  });
  Movie.associate = function(models){
    Movie.belongsToMany(models.Cast, { through: 'MovieCast'}),
    Movie.hasMany(models.MovieCast)
  }
  return Movie;
};
