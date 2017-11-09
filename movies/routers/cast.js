const express = require('express')
const router  = express.Router()
const model = require('../models')

router.get('/', function(req,res){
  model.Cast.findAll().then(function(rows){
    res.render('casts',{data_Cast:rows})
  }).catch( err => {
    if(err){console.log(err);}
  })
})

router.get('/add', function(req,res){
  res.render('casts-add')
})

router.post('/add', function(req,res){
  model.Cast.create({
    first_name : req.body.first_name,
    last_name  : req.body.last_name,
    birth_year : req.body.birth_year,
    gender     : req.body.gender
  }).then(function(){
    res.redirect('../casts')
  }).catch( err => {
    if(err){console.log(err);}
  })
})

router.get('/edit/:id', function(req,res){
  model.Cast.findById(req.params.id).then(function(rows){
    // res.send(rows)
    res.render('casts-edit',{data_Cast:rows})
  }).catch( err => {
    if(err){console.log(err);}
  })
})

router.post('/edit/:id', function(req,res){
  model.cast.update({
    first_name : req.body.first_name,
    last_name  : req.body.last_name,
    birth_year : req.body.birth_year,
    gender     : req.body.gender
  },{
    where : {
      id : req.params.id
    }
  }).then().catch()
})


router.get('/delete/:id', function(req,res){
  model.Cast.destroy({
    where : {
      id : req.params.id
    }
  }).then(function(){
    res.redirect('../../casts')
  }).catch( err => {
    if(err){console.log(err);}
  })
})

module.exports = router
