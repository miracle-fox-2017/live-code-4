'use strict';
module.exports = (sequelize, DataTypes) => {
  var CastMovie = sequelize.define('CastMovie', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role:DataTypes.STRING

  });

  // CastMovie.associate = function (models) {
  //   CastMovie.belongsTo(models.Movie)
  //   CastMovie.belongsTo(models.Cast)
  // };

  return CastMovie;
};
