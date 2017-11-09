var express = require('express')
var router = express.Router()
const Model = require('../models')

// define the home page route
router.get('/', function (req, res) {
  Model.Movie.findAll({order: [['released_year', 'DESC']]})
  .then(movies => {
    // res.send(movies)
    res.render('movies/index', {movies: movies})
  })
})

router.get('/addcast/:id', function (req, res) {
  Model.Movie.findById(req.params.id)
  .then(movie => {
    Model.Cast.findAll()
    .then(casts => {
      // res.send(casts)
      res.render('movies/addcast', {movie: movie, casts: casts, error: false})
    })
  })
})

router.post('/addcast/:id', function (req, res) {
  Model.MovieCast.create({
    CastId: req.body.CastId,
    MovieId: req.params.id,
    role: req.body.role
  })
  .then(() => {
    res.redirect('/movies')
  })
  .catch(error => {
    // res.send(error.errors[0].message)
    let errorMsg = error.errors[0].message
    res.send(errorMsg)
    // res.redirect('/movies/addcast/'+req.body.CastId, {error: errorMsg})
  })
})

module.exports = router

/*
Model.Movie.findAll({
  include: [{ model: Model.Cast}]
})
.then(movies => {
  res.send(movies)
})

// Model.Movie.findAll()
// .then(movies => {
//   let newMovies = movies.map(movie => {
//     movie.caster = []
//     return new Promise((resolve, reject) => {
//       movie.getCasts()
//       .then(casts => {
//         casts.forEach(cast => {
//           movie.caster = cast
//           resolve(movie)
//           // console.log(cast);
//           // res.send(movie)
//         })
//
//       })
//     })
//   })
//   Promise.all(newMovies)
//   .then(dataMovies => {
//     console.log(dataMovies);
//     res.send(dataMovies)
//   })
  // res.send(movies)
  // res.render('movies/index', {movies: movies})
// })
*/
