'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.STRING,
    CastId: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MovieCast;
};