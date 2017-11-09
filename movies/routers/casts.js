const express = require('express')
const router = express.Router()
const models = require('../models');
const Umur = require('../helpers/umur');
router.get('/', (req, res)=>{
  models.Cast.findAll()
  .then(dataCasts=>{
    res.render('cast', {dataCasts:dataCasts})
  })
  .catch(err=>{
    res.send(err)
  })

})
router.get('/:id/listMovies', (req, res)=>{
  models.Cast.findOne(
  {
    where: {
      id: req.params.id
    },
    include: models.Movie
  })
  .then(dataDetails=>{
    res.render('listMovies', {dataDetails:dataDetails, Umur:Umur})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/add', (req, res)=>{
  res.render('addCast')
})

router.post('/add', (req, res)=>{
  let input = req.body
  models.Cast.create(
  {
    first_name: input.first_name,
    last_name: input.last_name,
    birth_year: input.birth_year,
    gender: input.gender
  })
  .then(()=>{
    res.redirect('/casts')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit/:id', (req, res)=>{
  models.Cast.findById(req.params.id)
  .then(dataCast=>{
    res.render('editCast', {dataCast:dataCast})
  })
  .catch(err=>{
    res.send(err)
  })
})

router.post('/edit/:id', (req, res)=>{
  let edit = req.body
  models.Cast.update(
  {
    first_name: edit.first_name,
    last_name: edit.last_name,
    gender: edit.gender,
    birth_year: edit.birth_year
  },
  {
    where: {
      id : req.params.id
    }
  })
  .then(()=>{
    res.redirect('/casts')
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req, res)=>{
  models.Cast.destroy(
  {
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/casts')
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router
