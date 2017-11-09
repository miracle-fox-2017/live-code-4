'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'role is required'
        },
        // allowNull: {
        //   args: true,
        //   msg: 'role is required'
        // }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  MovieCast.associate = function(models) {
    MovieCast.belongsTo(models.Movie)
    MovieCast.belongsTo(models.Cast)
  }

  return MovieCast;
};
