'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
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