module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  });

  MovieCast.associate = (models) => {
    MovieCast.belongsTo(models.Cast);
    MovieCast.belongsTo(models.Movie);
  }

  return MovieCast;
};