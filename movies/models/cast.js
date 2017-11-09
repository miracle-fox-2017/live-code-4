'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  });
  Cast.associate = function(models){
    Cast.belongsToMany(models.Movie, { through: 'MovieCast'});
    Cast.hasMany(models.MovieCast)
  }

  // getFullName()=>{
  //   return `${Cast.first_name} ${Cast.last_name}`
  // }
  return Cast;
};
