'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  // Sequelize : function () => {
  //   Cast.hasMany(Movie, {through: 'MovieCast'});
  //   Movie.belongsToMany(Cast, {through: 'MovieCast'});
  // }
  
  return Cast;
};
