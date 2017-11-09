'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  })
  Cast.associate = (models) => {
    Cast.belongsToMany(models.Movie, { through: 'MovieCast' })
    Cast.hasMany(models.MovieCast)
  }
  return Cast;
};