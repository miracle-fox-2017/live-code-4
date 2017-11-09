const express = require('express');
const router = express.Router();
const db = require('../models')


router.get('/cast',function(req,res) {
  db.Cast.findAll().then(rows=>{
    res.render('cast',{rows:rows})
    // res.send(rows)
  })
})


router.get('/cast/add',function(req,res) {
    res.render('castadd')
})

router.post('/cast/add',function(req,res) {
  db.Cast.create({first_name:req.body.first_name,last_name:req.body.last_name,birth_year:req.body.birth_year,gender:req.body.gender})
    .then(rows=>{
      res.redirect('cast')
    })
})

router.post('/cast/delete/:id',function(req,res) {
    db.Cast.destroy({where:{id:req.params.id}}).then(rows=>{
      res.redirect('cast')
    })
})



module.exports = router;
