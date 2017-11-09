const express = require('express')
const router = express.Router()
const Model = require('../models')

router.get('/', (req, res)=> {
	Model.Cast.findAll({
	}).then(casts =>{
		res.render('cast/list', {casts})
	})
})

router.get('/edit/:id', (req, res)=>{
	Model.Cast.findById(req.params.id)
	.then(cast => {
		console.log(cast)
		res.render('cast/edit', {cast})
	})
	.catch(error => {
		res.send(error)
	})
})

router.post('/edit/:id', (req, res)=> {
	Model.Cast.update(
		{
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			birth_year : req.body.birth_year,
			gender : req.body.gender
		},
		{ where : {id : req.params.id }
	})
	.then(hasil => {
		res.redirect('/casts')
	})
})

router.get('/add', (req, res) =>{
	res.render('cast/add')
})

router.post('/add', (req, res) =>{
	Model.Cast.create({
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		birth_year : req.body.birth_year,
		gender : req.body.gender

	}).then(hasil =>{

		res.redirect('/casts')
	})
	.catch(error =>{
		res.render('cast/add', {err : error.errors})
	})
})

router.get('/delete/:id', (req, res)=>{
	Model.Cast.destroy({
		where : {id : req.params.id}
	}).then(hasil => {
		res.redirect('/casts')
	})
	.catch(error =>{
		res.send(error)
	})
})



router.get('/see_movies/:id', (req, res) => {
	Model.Cast.findAll({
		include : [{
			model : Model.Movie
		}],
		order : [['id', 'ASC']]
	}).then(hasil =>{
		console.log(hasil[1].Movies[0].MovieCast)
		res.render('cast/see_movies', {cast : hasil})
	})
})



module.exports = router