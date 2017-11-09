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
      }
    }
  });
  Cast.prototype.getFullName = function () {
    return this.first_name + ' ' + this.last_name
  }
  Cast.associate = models => {
    Cast.belongsToMany(models.Movie, {through: models.MovieCast})
    Cast.hasMany(models.MovieCast)
  }
  return Cast;
};
