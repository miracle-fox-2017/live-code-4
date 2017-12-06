const express = require('express')
const router  = express.Router()
const model = require('../models')

router.get('/', function(req,res){
  model.Movie.findAll({
    order      : [['released_year', 'DESC']],
  }).then(function (rows){
    // res.send(rows)
    res.render('movie',{data_Movie:rows,error:''})
  }).catch(function(err){
    if(err){console.log(err);}
  })
})

router.get('/:id/addcast',function(req,res){
  model.MovieCast.findAll({
    include : [model.cast],
    attributes : ['id','CastId','MovieId','role']
  },{
    where : {
      MovieId : req.params.id
    }
  }).then(function(data_MovieCast){
    model.Movie.findById(req.param.id).then(function(rows){
      res.send(data_MovieCast)
      console.log(data_MovieCast);
      // res.render('movie-addcast',{data_Movie:rows,data_MovieCast:data_MovieCast})
    })
  }).catch(function(err){
    if(err){console.log(err);}
  })
})

module.exports = router
