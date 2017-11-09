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
        // associations can be defined here
      }
    }
  });

  Cast.prototype.getfullname = function() {
    return this.first_name + ' ' + this.last_name
  }

  Cast.associate = function(models) {
      Cast.hasMany(models.MovieCast)
      Cast.belongsToMany(models.Movie, {through: 'MovieCast'})
  }

  return Cast;
};
