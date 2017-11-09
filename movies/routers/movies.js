let express = require('express')
let router = express.Router()
let model = require('../models')

router.get('/',function(req,res){
  model.Movie.findAll().then(function(rowsMovies){
    res.render('movies',{dataJsonMovies:rowsMovies})
  })
})

router.get('/addCasts/:id',function(req,res){
  model.Cast.findAll().then(function(rowsCasts){
    model.Movie.findAll(
      {
        where: {id: req.params.id}
      }
    ).then(function(rowsMovies){
      res.render('addCasts',{dataJsonCasts:rowsCasts,dataJsonMovies:rowsMovies})
      })
    })
})

router.post('/addCasts/:id',function(req,res){
  model.MovieCast.create(
    {
      MovieId: req.params.id,
      CastId: req.body.id,
      role: req.body.role
    }
  ).then(function(){
    res.redirect('/movies')
  }).catch(function(err){
    console.log(err);
  })
})

module.exports = router
