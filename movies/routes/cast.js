const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
  db.Cast.findAll({order : [['id', 'ASC']]}) // ORDER  !!!! ^ ^
    .then(function(rowCast) {
      res.render('cast', {rowCast: rowCast})
    })
})

router.get('/add', function(req, res) {
  db.Cast.findAll()
    .then(function() {
      res.render('addCast')
    })
})

router.get('/add/:id', function(req, res) {
  db.Cast.findAll()
    .then(function() {
      res.render('addCast')
    })
})

router.post('/add', function(req, res) {
  db.Cast.create( {
    first_name : req.body.first_name,
    last_name  : req.body.last_name,
    birth_year : req.body.birth_year,
    gender     : req.body.gender
  })
    .then(function(){
      res.redirect('/casts')
    })
})

router.get('/edit/:id', function(req, res) {
  db.Cast.findById(req.params.id)
    .then(function(rowEditCast) {
      res.render('editCast', {rowEditCast:rowEditCast})
    })
})

router.post('/edit/:id', function(req, res) {
  db.Cast.findById(req.params.id)
  .then(function(rowEditCast){
    rowEditCast.update( {
      first_name : req.body.first_name,
      last_name  : req.body.last_name,
      birth_year : req.body.birth_year,
      gender     : req.body.gender
    })
    .then(function(){
      res.redirect('/casts')
    })
  })
})

router.get('/delete/:id', function(req,res) {
  db.Cast.destroy({
    where : {id:req.params.id}
  })
  .then(function(){
    res.redirect('/casts')
  })
})

module.exports = router;
