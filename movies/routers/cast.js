const express = require('express');
const Models = require('../models');


const router = express.Router();


router.get('/',(req,res)=>{
  Models.Cast.findAll().then(data=>{
    // res.send(data)
    res.render('casts',{data})
  })
})

router.get('/add',(req,res)=>{
  res.render('addcast')
})

router.post('/add',(req,res)=>{
  Models.Cast.create({first_name: req.body.first_name,last_name :req.body.last_name,birth_year:req.body.birth_year,gender :req.body.gender}).then(()=>{
    res.redirect('/casts')

  })
})

router.get('/edit/:id',(req,res)=>{
  Models.Cast.findById(req.params.id).then(data=>{
    // res.send(data)
    res.render('editcast',{data})

  })
})
router.get('/delete/:id',(req,res)=>{
  Models.Cast.destroy({where:{id :req.params.id}}).then(data=>{
    res.redirect('/casts')
  })
})



module.exports = router;



// Buatlah CRUD untuk model Cast dengan  (20)
// Untuk menampilkan list, pada route GET “/casts”. Tampilkan Fullname, Birth Year, Gender. Untuk menampilkan fullname buatlah instance method pada model Cast. (-3 jika tidak menggunakan instance method) (5)
// Untuk menambah data, route “/casts/add” (4)
// Gunakan dropdown untuk memasukkan nilai gender
// Untuk update data, route “/casts/edit/:id” (9)
// Data pada dropdown harus ter-populate untuk memasukkan nilai gender (-5 bila pada form edit memunculkan gender yang tidak sesuai dengan data sebelumnya)
// Untuk delete data, route “/casts/delete/:id” (2)
//
