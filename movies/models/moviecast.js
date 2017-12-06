'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.INTEGER
    },    
    role: {
      type : DataTypes.STRING,
      notEmpty: true
    },
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  });

  MovieCast.associate = function(models) {
     MovieCast.belongsTo(models.Cast),
     MovieCast.belongsTo(models.Movie)
  }    
  return MovieCast;
};