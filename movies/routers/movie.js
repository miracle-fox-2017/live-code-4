const express = require('express');
const router = express.Router()
const models = require('../models');

router.get('/', (req, res) => {
  models.Movie.findAll().then((movie) => {
    res.render('movie', {movie: movie})
  })
})

router.get('/addcast/:id', (req, res) => {
  models.Movie.findOne({where:{id:req.params.id}}).then((movie) => {
    models.Cast.findAll().then((cast) => {
      res.render('movieaddcast', {cast: cast, movie:movie})
    })
  })
})

router.post('/addcast/:id', (req, res) => {
  models.MovieCast.create({MovieId: req.params.id, CastId: req.body.CastId, role: req.body.role}).then(() => {
    res.redirect('/movie')
  })
})

module.exports = router;
