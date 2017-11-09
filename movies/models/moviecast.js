'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });





  MovieCast.associate = function(models) {
    MovieCast.belongsTo(models.Cast)
    MovieCast.belongsTo(models.Movie)
  }
  return MovieCast;
};
