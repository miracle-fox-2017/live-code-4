const express = require('express')
const router = express.Router()
const db = require('../models')




router.get('/',(req,res)=>{
  db.Movie.findAll({order:[['name', 'ASC']]}).then((dataMovies)=>{
    // console.log(dataMovies[0])
    res.render('movies',{dataMovies})
  })
})


module.exports=router
