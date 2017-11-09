
const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/',(req,res)=>{
  db.Cast.findAll().then((dataCasts)=>{
    res.render('casts',{dataCasts})
  })
})

// router.get('/add',(req,res)=>{
//   db.Cast.create(
//     { first_name: 'req.body',
//       last_name:'req.body',
//     birthday_year: req.body,
//     gender:'req.body'
//   }).then((dataCasts)=>{
//     res.render('casts',{dataCasts})
//   })
// })
// router.post('/add',(req,res)=>{
//   db.Cast.create(
//     { first_name: 'req.body',
//       last_name:'req.body',
//     birthday_year: req.body,
//     gender:'req.body'
//   }).then((dataCasts)=>{
//     res.redirect('/casts')
//   })
// })








module.exports=router
