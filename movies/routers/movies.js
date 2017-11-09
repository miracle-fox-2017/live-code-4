const express = require('express');
const router = express.Router();
const Model = require('../models')

router.get('/', (req, res) => {
  Model.Movie.findAll({order:[['released_year', 'DESC']]}).then(movies => {
    // res.send(movie)
    res.render('movies', {movies:movies})
  })
})

function renderAddCast(req,res,err) {
  Model.Movie.findById(req.params.id).then(movie => {
    Model.Cast.findAll().then(casts => {
      res.render('movies/addcast', {casts:casts, movie:movie, id:req.params.id, err:err})
    })
  })
}

router.get('/:id/addcast', (req, res) => {
  renderAddCast(req,res)
})

router.post('/:id/addcast', (req, res) => {
  req.body.MovieId = req.params.id
  Model.MovieCast.create(req.body).then(() => {
    res.redirect('/movies')
  }).catch(err => {
    renderAddCast(req,res,'You must fill out all required Field!!!')
  })
})

module.exports = router;
