const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res)=> {
	Model.Movie.findAll({
	}).then(movies =>{
		res.render('movies/list', {movies})
	})
})

router.get('/add_cast/:id', (req, res) => {
	Model.Movie.findById(req.params.id).then(movie => {
		Model.Cast.findAll().then(cast => {
			res.render('movies/add_cast', {movie, cast})
		})
	})
})

router.post('/add_cast/:id', (req, res) =>{
	// res.send(req.body)
	Model.MovieCast.create({
		MovieId : req.params.id,
		CastId : req.body.CastId,
		role : req.body.role
	})
	.then(() => {
		res.redirect('/movies')
	})
	.catch(errors =>{
		res.send(errors.errors[0].message)
		// res.render('movies/add_cast', {error: errors.error[0] })
	})
})


module.exports = router