'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Cast.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  };

  Cast.associate = function (models) {
    Cast.belongsToMany(models.Movie, {through: 'MovieCast'})
    Cast.hasMany(models.MovieCast)
  };

  return Cast;
};
