'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          args : true,
          msg : 'peran tidak boleh kosong'
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  MovieCast.associate = function (model) {
    MovieCast.belongsTo(model.Movie)
    MovieCast.belongsTo(model.Cast)
  }


  return MovieCast;
};
