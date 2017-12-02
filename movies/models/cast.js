'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cast = sequelize.define('Cast', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    getterMethods: {
      fullName: function ()  { return this.first_name + ' ' + this.last_name }
    },

    setterMethods: {
      fullName: function (value) {
        var names = value.split(' ');

        this.setDataValue('first_name', names.slice(0, -1).join(' '));
        this.setDataValue('last_name', names.slice(-1).join(' '));
      },
    }
  }
);
return Cast;
};
