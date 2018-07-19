'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    MovieId: DataTypes.INTEGER,
    CastId: DataTypes.INTEGER,
    role:
    {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "role/peran agar tidak boleh kosong"
      }
    }
  });
  MovieCast.associate = (models)=>{
    MovieCast.belongsTo(models.Movie)
    MovieCast.belongsTo(models.Cast)
  }
  return MovieCast;
};
