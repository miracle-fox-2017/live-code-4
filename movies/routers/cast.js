 const express = require('express');
 const router = express.Router();
 const db = require('../models')
 
 router.get('/', function(req, res){
   db.Cast.findAll().then(function(dataCast){
     res.render('cast', {dataCast:dataCast})
   }).catch(function(err){
        console.log(err);
        })
  })

 router.get('/add', function(req, res){
   res.render('castadd')
 })
 
 router.post('/add', function(req, res){
  //  console.log(req.body);
   db.Cast.create(
     {
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       birth_year: req.body.birth_year,
       gender: req.body.gender
     }).then(function(){
    //  res.send(req.body)
     res.redirect('/casts')
   }).catch(function(err){
       console.log(err);
       })
 })
 
 router.get('/edit/:id', function(req, res){
   db.Cast.findById(req.params.id).then(function(dataCast){
     res.render('castedit', {dataCast:dataCast})
   }).catch(function(err){
       console.log(err);
       })
   
 })
 
 router.post('/edit/:id', function(req, res){
   db.Cast.update(req.params.id,{where:{
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       birth_year: req.body.birth_year,
       gender: req.body.gender}
   }).then(function(){
     res.redirect('/casts')
   }).catch(function(err){
       console.log(err);
       })
 })
 
 router.get('/delete/:id', function(req, res){
  db.Cast.destroy({where:
    {id:req.params.id}
  }).then(function(){
    res.redirect('/casts')
  }).catch(function(err){
      console.log(err);
    })
  
 })
   
 
 module.exports = router