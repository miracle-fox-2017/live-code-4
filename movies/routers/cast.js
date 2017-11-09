const express = require('express');
const router = express.Router();
const models = require('../models')





router.get('/', (req,res)=> {
  // res.send('masuk ga?')
  models.Cast.findAll().then(rows => {
    res.send(rows)
    res.render('cast', rows)
  }).catch(err => {
    console.log(err);
  })
})

router.post('/edit', (req,res) => {
  models.Cast.findById({where : {id : req.params.id}})
})
//
// router.get('/add', (req,res) => {
//   models.Cast.create().then(=> {
//     res.render('cast')
//   })
// })







module.exports = router
