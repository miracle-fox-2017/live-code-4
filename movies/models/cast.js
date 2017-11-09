'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING
  })

  Cast.associate = model =>{
    Cast.hasMany(model.MovieCast)
    Cast.belongsToMany(model.Movie, {through : 'MovieCast'})
  }

  Cast.prototype.getFullName = function() {
  return [this.first_name, this.last_name].join(' ');
};

  return Cast;
};