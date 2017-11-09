'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
      type : DataTypes.STRING,
      validate : {
         is: ["^[a-z]+$",'i']
      }
    }
  });
  MovieCast.associate = models => {
    MovieCast.belongsTo(models.Cast, {foreignKey:'CastId'})
    MovieCast.belongsTo(models.Movie, {foreignKey:'MovieId'})
  }
  return MovieCast;
};