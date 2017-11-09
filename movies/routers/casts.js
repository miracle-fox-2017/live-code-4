const express = require('express')
const router = express.Router()
const db = require('../models');


router.get('/', (req, res) => {
  db.Cast.findAll()
  .then(casts => {
    res.render('casts', {casts})
  })
})

router.get('/add', (req, res) => {
  res.render('addCast')
})

router.post('/add', (req, res) => {
  db.Cast.create(req.body)
  .then(success => {
    res.redirect('/casts')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/casts')
  })
})

router.get('/edit/:id', (req, res) => {
  db.Cast.findById(req.params.id)
  .then(cast => {
    res.render('castEdit', {cast})
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req, res) => {
  db.Cast.findById(req.params.id)
  .then(cast => {
    cast.destroy()
    .then(success => {
      res.redirect('/casts')
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/:id/listMovies', (req, res) => {
  db.Cast.findById(req.params.id, {
    include : [
      {model : db.Movie}
    ]
  })
  .then(result => {
    // res.send(result)
    // res.send(result.Movies[0].MovieCast.role)
    res.render('listMovies', {result})
  })
  .catch(err => {
    console.log(err);
    res.send(err)
  })
})

module.exports = router;