'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movies', {
    name: DataTypes.STRING,
    relased_year: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Movie;
};
