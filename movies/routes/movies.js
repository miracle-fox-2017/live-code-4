const express = require('express')
const router  = express.Router()
const Model = require('../models')



router.get('/', (req, res) => {
  Model.Movie.findAll().then(dataMovies => {
      //res.send(dataMovies)
      res.render('movies/movies', {dataMovies:dataMovies})
  })

})







module.exports = router
