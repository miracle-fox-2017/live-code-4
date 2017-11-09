'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Movie.associate = function (models){
        //   Movie.belongsToMany(models.Cast, {through : `MovieCast`})
        //   Movie.hasMany(models.Cast)
        // }
      }
    }
  });
  return Movie;
};
