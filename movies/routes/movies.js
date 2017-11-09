const express = require('express')
const router  = express.Router()
const Model = require('../models')



router.get('/', (req, res) => {
  Model.Movie.findAll().then(dataMovies => {
      //res.send(dataMovies)
      res.render('movies/movies', {dataMovies:dataMovies})
  })
})


router.get('/addcast/:id', (req, res) => {
  Model.Movie.findOne({
    where:{id:req.params.id}
  })
  .then(dataMovie => {
    Model.Cast.findAll().then(dataCasts => {
      //res.send(dataCasts)
      res.render('movies/addcast', {dataMovie:dataMovie, dataCasts:dataCasts})
    })
  })
})


// router.post('/addcast/:id', (req, res) => {
//   res.send('hello')
// })

router.post('/addcast/:id', (req, res) => {
  //console.log(req.body);
  Model.MovieCast.create({
    CastId : req.body.CastId,
    MovieId : req.params.id,
    role : req.body.role
  })
  .then(() => {
    res.redirect('/movies')
  })
})




module.exports = router
