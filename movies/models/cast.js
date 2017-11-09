'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  });
  
  // Class Method
  Cast.associate = function (models) {
      // ...associate the models
      Cast.belongsToMany(models.Movie, {through: 'CastMovie'});
  };
  
  // Instance Method
  Cast.prototype.fullName = function () {
    return this.first_name + ' ' + this.last_name
  }
  
  return Cast;
};