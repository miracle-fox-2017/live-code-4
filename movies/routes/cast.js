const express = require('express')
const route   = express.Router()
const Model   = require('../models')
const sumAge  = require('../helper/sumAge')

route.get('/', (req, res) => {
	Model.Cast.findAll().then(Casts => {
		res.render('cast', {casts : Casts})
		// res.send(Casts)
	})
})

route.post('/add', (req, res) => {
	Model.Cast.create({first_name : req.body.first_name, last_name : req.body.last_name, birth_year : req.body.birth_year, gender : req.body.gender}).then(()=>{
		res.redirect('/casts')
	})
	// res.send(req.body)
})

route.get('/edit/:id', (req, res) => {
	Model.Cast.findOne({where: {id : req.params.id}}).then(cast => {
		let gender = ['Female', 'Male']
		res.render('editCast', {cast : cast, gender : gender})
		// res.send(cast)
	})
})

route.post('/edit/:id', (req, res) => {
	Model.Cast.update({first_name : req.body.first_name, last_name : req.body.last_name, birth_year : req.body.birth_year, gender : req.body.gender},{where: {id : req.params.id}}).then(()=>{
		res.redirect('/casts')
	})
})

route.get('/delete/:id', (req, res) => {
	Model.Cast.destroy({where: {id : req.params.id}}).then(() =>{
		res.redirect('/casts')
	})
})

route.get('/seeMovie/:id', (req, res) => {
	Model.Cast.findOne({include : [Model.Movie], where : {id : req.params.id}}).then(castMovie =>{
		castMovie.Movies.forEach(cast => {;
			cast.age = sumAge(parseInt(cast.released_year), parseInt(castMovie.birth_year))
		})
		res.render('castMovie', {castMovie})
		// res.send(castMovie)
	})
})

module.exports = route