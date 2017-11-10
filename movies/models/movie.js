'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.TEXT,
    released_year: DataTypes.TEXT,
    genre: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Movie.associate = function (models) {
    Movie.belongsToMany(models.Cast, {through: 'MovieCast'})
    Movie.hasMany(models.MovieCast)
  };

  return Movie;
};
