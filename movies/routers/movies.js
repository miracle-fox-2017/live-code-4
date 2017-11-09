const express = require('express');
const bodyParser = require('body-parser')
const Models = require('../models');


const router = express.Router();


router.get('/',(req,res)=>{
  Models.Movie.findAll().then(data=>{
    // res.send(d)
    res.render('movies',{data})
  })
})

module.exports = router;
