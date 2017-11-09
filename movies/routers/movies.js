const express = require('express')
const router = express.Router()
const db = require('../models');

router.get('/', (req, res) => {
  db.Movie.findAll({
    order : [
      ['released_year', 'DESC']
    ]
  })
  .then(movies => {
    res.render('movies', {movies})
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/:id/addCastRole', (req, res) => {
  db.Cast.findAll()
  .then(casts => {
    res.render('addCastRole', {movieId: req.params.id, casts: casts, msg : null})
  })
})

router.post('/:id/addCastRole', (req, res) => {
  db.MovieCast.create({
    CastId : req.body.cast,
    MovieId : req.body.movieId,
    role: req.body.role
  })
  .then(success => {
    res.redirect('/movies')
  })
  .catch(err => {
    db.Cast.findAll()
    .then(casts => {
      res.render('addCastRole', {movieId: req.params.id, casts: casts, msg : err})
    })
  })
})

module.exports = router;