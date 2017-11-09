const express = require('express');
const router = express.Router();
const Model = require('../models')
const getAge = require('../helper/getAge')

router.get('/', (req, res) => {
  Model.Cast.findAll({
    include:{
      model: Model.Movie
    }
  }).then(casts => {
    // res.send(casts)
    res.render('casts', {casts:casts})
  })
})

router.get('/add', (req, res) => {
  res.render('casts/add')
})

router.post('/add', (req, res) => {
  Model.Cast.create(req.body).then(() => {
    res.redirect('/casts')
  })
})

router.get('/edit/:id', (req, res) => {
  Model.Cast.findById(req.params.id).then(cast => {
    res.render('casts/edit', {cast:cast})
  })
})

router.post('/edit/:id', (req, res) => {
  Model.Cast.update(req.body,{where:req.params}).then(() => {
    res.redirect('/casts')
  })
})

router.get('/delete/:id', (req, res) => {
  Model.Cast.destroy({where:req.params}).then(() => {
    res.redirect('/casts')
  })
})

router.get('/seemovie/:id', (req, res) => {
  Model.Cast.findById(req.params.id, {
    include : {
      model: Model.Movie
    }
  }).then(cast => {
    // res.send(cast)
    res.render('casts/seemovie', {cast:cast})
  })
})

module.exports = router;
