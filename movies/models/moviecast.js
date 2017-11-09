'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role: DataTypes.STRING,
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  });
  MovieCast.associate = (models) => {
    MovieCast.belongsTo(models.Movie)
    MovieCast.belongsTo(models.Cast)
  }
  return MovieCast;
};