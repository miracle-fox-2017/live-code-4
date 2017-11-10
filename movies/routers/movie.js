 const express = require('express');
 const router = express.Router();
 const db = require('../models')
 
router.get('/', function(req, res){
  db.Movie.findAll({order: [
    ['name','DESC']
  ]
  }).then(function(dataMovie){
      res.render('movie', {dataMovie:dataMovie})
    }).catch(function(){
      console.log(err);
      })
    
})
  
 
 module.exports = router