'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Casts', {
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
  Cast.prototype.getFullname = function() {
  return [this.first_name, this.last_name].join(' ');
};
  return Cast;
};
