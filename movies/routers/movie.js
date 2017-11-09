const express = require('express');
const router = express.Router();
const models = require('../models')





router.get('/', (req,res)=> {
  // res.send('masuk ga?')
  models.Movie.findAll().then(rows => {
    res.send(rows)
    res.render('movies', {rows})
  }).catch(err => {
    console.log(err);
  })
})







module.exports = router
