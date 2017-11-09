'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role: DataTypes.STRING
  })
  MovieCast.associate = function(model){
    MovieCast.belongsTo(model.Cast)
    MovieCast.belongsTo(model.Movie)
  }
  return MovieCast;
};
