'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING
  })
  Cast.associate = function(model){
    Cast.belongsToMany(model.Movie,{through:'MovieCast'})
  }
  return Cast;
};
