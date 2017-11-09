var express = require('express')
var router = express.Router()

//define models
var Models = require('../models')
var Cast = Models.Cast

//define helper
var age = require('../helper/age')

// define the home page route
router.get('/', function (req, res) {
  Cast.findAll()
  .then(casts=>{
    // console.log(casts);
    res.render('casts', {casts:casts})
  })
})

router.get('/add', function (req, res){
  res.render('casts_add')
})

router.post('/add', function (req, res){
  // console.log(req.body);
  Cast.create(req.body)
  .then(()=>{
    res.redirect('/casts')
  }).catch(err=>{
    console.log(err);
  })
})

router.get('/edit/:id', function (req, res){
  Cast.findOne({where : {id : req.params.id}})
  .then(cast=>{
    res.render('casts_edit', {cast:cast})
  })
})

router.post('/edit/:id', function (req, res){
  Cast.update(req.body, {where:{id:req.params.id}})
  .then(()=>{
    res.redirect('/casts')
  }).catch((err)=>{
    console.log(err);
  })
})

router.get('/delete/:id', function (req, res){
  Cast.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.redirect('/casts')
  })
})

router.get('/:id/listMovies', function (req, res){
  Cast.findOne({
    include: ['Movies'],
    where: {id:req.params.id}
  })
  .then(casts=>{
    // console.log(casts.birth_year);
    // console.log(casts.Movies[0].released_year);
    casts.Movies.forEach((movie,i)=>{
      casts.Movies[i].age = age(casts.Movies[i].released_year, casts.birth_year)
    })
    // console.log(casts.Movies[1].age);
    
    res.render('listmovie',{casts:casts})
  })
})


module.exports = router