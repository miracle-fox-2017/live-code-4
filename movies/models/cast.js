'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  });

  Cast.associate = function(models) {
    Cast.belongsToMany(models.Movie, {through : "MovieCast"}),
    Cast.hasMany(models.MovieCast)
  }

  Cast.prototype.getFullName = function (models) {
    return this.first_name + ' ' + this.last_name
  }
  return Cast;
};