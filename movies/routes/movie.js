const express = require('express');
const routes = express.Router();
var models = require('../models');

routes.get('/',(req,res) =>{
  res.render('index')
})

routes.get('/movie',(req,res) =>{
  models.movie.findAll()
  .then(data =>{
    res.render('cast', {data:data})
  })
})



module.exports = routes
