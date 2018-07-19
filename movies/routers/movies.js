const express = require('express')
const router = express.Router()
const models = require('../models');

router.get('/', (req, res)=>{
  models.Movie.findAll(
  {
    order: [["released_year","DESC"]]
  })
  .then(dataMovies=>{
    res.render('movie',{dataMovies:dataMovies})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/:id/addCast', (req, res) =>{
  models.Movie.findById(req.params.id)
  .then(dataMovie=>{
    models.Cast.findAll()
    .then(dataCasts=>{
      res.render('inputCastMovie',{dataMovie:dataMovie,dataCasts:dataCasts,error:''})
    })
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/:id/addCast', (req, res) =>{
  models.MovieCast.create(
  {
    MovieId: req.params.id,
    CastId: req.body.CastId,
    role: req.body.role
  })
  .then(()=>{
    res.redirect('/movies')
  })
  .catch(err=>{
    res.render('inputCastMovie',{error:''})
  })
})
module.exports = router
