'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Cast.belongsToMany(Movie, {through: 'MovieCast'});
        // Movie.belongsToMany(Cast, {through: 'MovieCast'});
      }
    }
  });

  return Cast;
};