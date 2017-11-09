'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    realesed_year: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Movie.associate = function (models) {

    Movie.belongsToMany(models.Cast, { through: models.MovieCast })
    Movie.hasMany(models.MovieCast)
  };
  return Movie;
};
