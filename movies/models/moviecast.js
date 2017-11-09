'use strict';
module.exports = (sequelize, DataTypes) => {
  var MovieCast = sequelize.define('MovieCast', {
    CastId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    role: {
        type:DataTypes.STRING,
        validate:{
            isEmpty:function(value,next){
                if(value === ""){
                    return next("Peran tidak boleh kosong!");
                }else{
                    return next();
                }
            }
        }
    }
  });
  MovieCast.associate=(models)=>{
      MovieCast.belongsTo(models.Cast);
      MovieCast.belongsTo(models.Movie);
  }
  return MovieCast;
};
