'use strict';
module.exports = (sequelize, DataTypes) => {
  var CastMovie = sequelize.define('CastMovie', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  
  
  return CastMovie;
};