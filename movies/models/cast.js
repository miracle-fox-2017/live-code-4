'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING
  },
  {
  getterMethods: {
    fullName() {
      return this.first_name + ' ' + this.last_name
    }
  },

  setterMethods: {
    fullName(value) {
      const names = value.split(' ');

      this.setDataValue('first_name', names.slice(0, -1).join(' '));
      this.setDataValue('last_name', names.slice(-1).join(' '));
    },
  }
})

// Cast.associate = function (models) {
//   Cast.hasMany(models.Movie)
//   Cast.belongsToMany(models.CastMovie,{through : models.CastMovie})
// }


  return Cast;
};
