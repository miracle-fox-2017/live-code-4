'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  });
  Movie.associate = models => {
    Movie.belongsToMany(models.Cast, {through : 'MovieCast'})
  }
  return Movie;
};