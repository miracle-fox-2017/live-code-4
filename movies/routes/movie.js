var express = require('express')
var router = express.Router()

//define models
const Models = require('../models')
const Movie = Models.Movie
const Cast = Models.Cast
const CM = Models.CastMovie

// define the home page route
router.get('/', function (req, res) {
  Movie.findAll({order:[['released_year', 'DESC']]})
  .then(movies=>{
    // console.log(movies);
    res.render('movie', {movies:movies})
  })
})

router.get('/addcast/:id', function(req, res){
  Movie.findOne({where:{id:req.params.id}})
  .then(movie=>{
    Cast.findAll()
    .then(casts=>{
      // console.log(casts);
      res.render('addcast',{movie:movie, casts:casts, msg:''})
      
    })
  })
})

router.post('/addcast/:id', function(req, res){
  let insert = {
    CastId: req.body.CastId,
    MovieId: req.params.id,
    role: req.body.role
  }
  // console.log(insert);
  CM.create(insert)
  .then(()=>{
    res.redirect('/movies')
  }).catch(err=>{
    
    Movie.findOne({where:{id:req.params.id}})
    .then(movie=>{
      Cast.findAll()
      .then(casts=>{
        res.render('addcast',{movie:movie, casts:casts, msg:err})
        
      })
    })
    
  })
  
})

module.exports = router