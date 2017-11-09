'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  MovieCast.associate = function (models) {
    MovieCast.belongsTo(models.Movie);
    MovieCast.belongsTo(models.Cast);
  }

  return MovieCast;
};