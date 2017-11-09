var express = require('express')
var router = express.Router()
const Model = require('../models')

// define the home page route
router.get('/', function (req, res) {
  Model.Cast.findAll()
  .then(casts => {
    // res.send(casts)
    res.render('casts/index', {casts: casts})
  })
})

router.get('/add', function (req, res) {
  res.render('casts/add')
})

router.post('/add', function (req, res) {
  Model.Cast.create(req.body)
  .then(() => {
    // res.send(casts)
    res.redirect('/casts')
  })
})

router.get('/edit/:id', function (req, res) {
  Model.Cast.findById(req.params.id)
  .then(cast => {
    // res.send(cast)
    res.render('casts/edit', {cast: cast})
  })
})

router.post('/edit/:id', function (req, res) {
  Model.Cast.update(req.body, {where: req.params})
  .then(() => {
    res.redirect('/casts')
  })
})

router.get('/delete/:id', function (req, res) {
  Model.Cast.destroy({where: req.params})
  .then(() => {
    res.redirect('/casts')
  })
})



module.exports = router
// {order: [['released_year', 'DESC']]}
