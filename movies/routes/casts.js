const express = require('express')
const router  = express.Router()
const Model = require('../models')



router.get('/', (req, res) => {
  Model.Cast.findAll().then(dataCasts => {
      res.render('casts/casts', {dataCasts:dataCasts})
  })
})

router.get('/add', (req, res) => {
  res.render('casts/add')
})


router.post('/add', (req, res) => {
  let first_nama = req.body.first_nama
  let last_name = req.body.last_name
  let birth_year = req.body.birth_year
  let gender = req.body.gender

  Model.Cast.create({
    first_nama : first_nama,
    last_name : last_name,
    birth_year : birth_year,
    gender : gender
  })
  .then(() => {
    res.redirect('/casts')
  })
})


router.get('/edit/:id', (req, res) => {
  Model.Cast.findOne({
    where:{id:req.params.id}
  })
  .then(dataCasts => {
    res.render('casts/edit', {dataCasts:dataCasts})
  })
})

router.post('/edit/:id', (req, res) => {
  console.log(req.body);
  let first_nama = req.body.first_nama
  let last_name = req.body.last_name
  let birth_year = req.body.birth_year
  let gender = req.body.gender
  Model.Cast.update({
    first_nama : first_nama,
    last_name : last_name,
    birth_year : birth_year,
    gender : gender
  }, {where:{id:req.params.id}})
  .then(() => {
    res.redirect('/casts')
  })

})


router.get('/delete/:id', (req, res) => {
  Model.Cast.destroy({
    where:{id:req.params.id}
  })
  .then(() => {
    res.redirect('/casts')
  })

})




router.get('/seemovies/:id', (req,res) => {
  Model.Cast.findOne({
    include:[
      {Model:Model.Movie}
    ]
  },{where:{id:req.params.id}}).then(dataCast =>{
    res.send(dataCast)
  })
})

















module.exports = router
