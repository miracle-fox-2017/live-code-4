let express = require('express')
let router = express.Router()
let model = require('../models')
let getSumAge = require('../helper/getSumAge.js')

router.get('/',function(req,res){
  model.Cast.findAll().then(function(rowsCasts){
    res.render('casts',{dataJsonCasts:rowsCasts})
  })
})

router.post('/add',function(req,res){
  model.Cast.create(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birth_year: req.body.birth_year,
      gender: req.body.gender
    }
  ).then(function(){
    res.redirect('/casts')
  })
})

router.get('/edit/:id',function(req,res){
  model.Cast.findAll(
    {
      where: {id: req.params.id}
    }
  ).then(function(rowsCasts){
    res.render('editCasts',{dataJsonCasts:rowsCasts})
  })
})

router.post('/edit/:id',function(req,res){
  model.Cast.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birth_year: req.body.birth_year,
      gender: req.body.gender
    },
    {
      where: {id: req.params.id}
    }
  ).then(function(){
    res.redirect('/casts')
  })
})

router.get('/delete/:id',function(req,res){
  model.Cast.destroy(
    {
      where: {id: req.params.id}
    }
  ).then(function(){
    res.redirect('/casts')
  })
})

router.get('/viewMovies/:id',function(req,res){
  model.MovieCast.findAll(
    {
      include: [model.Movie,model.Cast],
      where: {CastId: req.params.id}
    }
  ).then(function(rowsMovieCasts){
    let result = []
    for(let i = 0; i < rowsMovieCasts.length; i++){
      let ageDifference = getSumAge(rowsMovieCasts[i].Cast.birth_year,rowsMovieCasts[i].Movie.released_year)
      result.push(ageDifference)
    }
    res.render('viewMovies',{dataJsonMovieCasts:rowsMovieCasts,dataJsonAge:result})
  })
})

module.exports = router
