const express = require('express');
const router = express.Router();
const model = require('../models')


router.get('/cast', (req,res)=> {
  model.cast.findAll({order:[['id','ASC']]}).then((dataCast)=> {
    res.render('cast', {dataCast, status})
  }).catch((err)=> {
    console.log(err)
  })
})




module.exports = router
