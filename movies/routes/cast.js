const express = require('express');
const routes = express.Router();
var models = require('../models');

routes.get('/',(req,res) =>{
  res.render('index')
})

routes.get('/cast',(req,res) =>{
  models.cast.findAll()
  .then(data =>{
    res.render('cast', {data:data})
  })
})

// router.get('/delete/:id'){
//
// }



module.exports = routes
