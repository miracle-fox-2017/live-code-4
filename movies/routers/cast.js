const express = require('express');
const router = express.Router()
const models = require('../models');
const umur = require('../helper/umur');

router.get('/', (req, res) => {
  models.Cast.findAll().then((cast) => {
    res.render('cast', {cast:cast})
  })
})

router.get('/add', (req, res) => {
  res.render('castadd')
})

router.post('/add', (req, res) => [
  models.Cast.create({first_name: req.body.first_name, last_name: req.body.last_name, birth_year: req.body.birth_year, gender: req.body.gender}).then(() => {
    res.redirect('/cast')
  })
])

router.get('/delete/:id', (req, res) => {
  models.Cast.destroy({where:{id:req.params.id}}).then(() => {
    res.redirect('/cast')
  })
})

router.get('/edit/:id', (req, res) => [
  models.Cast.findOne({where:{id:req.params.id}}).then((cast) => [
    res.render('castedit', {cast:cast})
  ])
])

router.get('/seemovie/:id', (req, res) => [
  models.MovieCast.findAll({where:{CastId:req.params.id}, include:[models.Movie, models.Cast]}).then((hasil) => {
    res.render('castseemovie', {hasil: hasil})
  })
])


module.exports = router;
