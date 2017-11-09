'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role: DataTypes.STRING
  });
  MovieCast.associate = function(models){
    MovieCast.belongsTo(models.Cast),
    MovieCast.belongsTo(models.Movie)
  }
  return MovieCast;
};
