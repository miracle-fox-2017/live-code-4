const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', function(req,res){
  Model.Casts.findAll().then((castsRows)=>{
    //res.send(moviesRows)
    res.render('cast',{castsRows})
  }).catch((err)=>{
    console.log(err);
  })
})

//menampilkan form cast
router.get('/add', function(req,res){
    res.render('castadd')
})
//menambahkan form cast
router.post('/add', function(req,res){
    let obj = {first_name:req.body.firstname,
               last_name:req.body.lastname,
               birth_year:req.body.birth,
               gender:req.body.gender}
    Model.Casts.create(obj).then((success)=>{
      res.redirect('/casts')
    }).catch((err)=>{
      console.log(err);
      res.render('castadd')
    })
})
//delete
router.get('/:id/delete', function(req,res){
  Model.Casts.destroy({
    where:{
      id:req.params.id
    }
  }).then((success)=>{
    res.redirect('/casts')
  }).catch((err)=>{
    console.log(err);
  })
})
//edit
router.get('/:id/edit', function(req,res){
  Model.Casts.findById(req.params.id).then((castsRows)=>{
    res.render('castedit')
  })
})

module.exports = router
