'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        MovieCast.associate = function (models){
          MovieCast.belongsToMany(models.Movie);
          MovieCast.belongsToMany(models.Cast);
        }
      }
    }
  });
  return MovieCast;
};
