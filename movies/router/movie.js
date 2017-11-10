const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', function(req,res){
  Model.Movies.findAll({order:[['relased_year','DESC']]}).then((moviesRows)=>{
    //res.send(moviesRows)
    res.render('movie',{moviesRows})
  }).catch((err)=>{
    console.log(err);
  })
})

module.exports = router
