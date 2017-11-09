module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  });

  Cast.prototype.fullname = function() {
    return this.first_name + ' ' + this.last_name;
  }

  Cast.associate = (models) => {
    Cast.belongsToMany(models.Movie, {
      through: 'MovieCast'
    })
  }

  return Cast;
};