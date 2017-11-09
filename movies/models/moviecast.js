'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
      type : DataTypes.STRING,
      validate : {
      notEmpty: true  
      }
    }
  })

  MovieCast.associate = model =>{
    MovieCast.belongsTo(model.Movie)
    MovieCast.belongsTo(model.Cast)
  }

  return MovieCast;
};