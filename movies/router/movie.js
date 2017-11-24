const express = require('express');
const router = express.Router();
const db = require('../models')


router.get('/movie',function(req,res) {
  db.Movie.findAll({order:[['released_year','DESC']]}).then(rows=>{
    res.render('movie',{rows:rows})
    // res.send(rows)
  })
})


module.exports = router;
