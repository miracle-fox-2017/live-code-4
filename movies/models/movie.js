'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.STRING,
    genre: DataTypes.STRING
  })

  Movie.associate = model =>{
    Movie.hasMany(model.MovieCast)
    Movie.belongsToMany(model.Cast, {through : 'MovieCast'})
  }
  return Movie;
};