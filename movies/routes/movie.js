const express = require('express')
const route   = express.Router()
const Model   = require('../models')

route.get('/', (req, res) => {
	Model.Movie.findAll({order : ['released_year']}).then(movies =>{
		res.render('movie', {movies : movies})
		// res.send(movies)
	})
})

route.get('/addCast/:id', (req, res) => {
	let err = ""
	Model.Movie.findOne({where : {id : req.params.id}}).then( movie => {
		Model.Cast.findAll().then(casts =>{
			res.render('addCast', {movie : movie, casts : casts, err : err})
		})
	})
})

route.post('/addCast/:id', (req, res) => {
	
	Model.MovieCast.create({CastId : req.body.cast, MovieId : req.params.id, role : req.body.role}).then(() => {
			res.redirect('/movie')
	}).catch(err =>{
		Model.Movie.findOne({where : {id : req.params.id}}).then( movie => {
			Model.Cast.findAll().then(casts =>{
				res.render('addCast', {movie : movie, casts : casts, err : err})
			})
		})
	})
})

module.exports = route 