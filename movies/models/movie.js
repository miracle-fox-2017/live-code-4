'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.STRING,
    genre: DataTypes.STRING
  });

  // Movie.associate = function (models) {
  //   Movie.hasMany(models.Cast)
  //   Movie.belongsToMany(models.CastMovie,{through : models.CastMovie})
  // }
  return Movie;
};
