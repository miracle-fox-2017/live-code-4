'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  });
  
  // Class Method
  Movie.associate = function (models) {
      // ...associate the models
      Movie.belongsToMany(models.Cast, {through: 'CastMovie'});
  };
  
  return Movie;
};