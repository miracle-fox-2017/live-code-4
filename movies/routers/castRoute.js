const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res) => {
	Models.Cast.findAll({ order: [['first_name', 'ASC']] })
		.then(allCast => {
			res.render("allCast", {casts: allCast});
		}).catch(err => res.send(err.message));
})

router.get('/add', (req, res) => {
	res.render('addCast');
})

router.post('/add', (req, res) => {
	Models.Cast.create(req.body).then(success => {
		res.redirect('/casts');
	}).catch(err => res.send(err.message));
})

router.get('/delete/:id', (req, res) => {
	Models.Cast.destroy({
		where: {
			id: req.params.id
		}
	}).then(allModelData => {
		res.redirect('/casts');
	}).catch(err => res.send(err.message));
})

router.get('/edit/:id', (req, res) => {
	Models.Cast.findById(req.params.id).then(foundCast => {
		res.render('editCast', {cast: foundCast});

	}).catch(err => res.send(err.message));
})

router.post('/edit/:id', (req, res) => {
	Models.Cast.update(req.body,
		{
			where: {
				id: req.body.id
			}
		}
	).then(allModelData => {
		res.redirect('/casts');
	}).catch(err => res.send(err.message));
})

router.get('/:id/listMovies/', (req, res) => {
	Models.Cast.findById(req.params.id, {
		include: [{
			model: Models.MovieCast,
			include: [{
				model: Models.Movie
			}]
		}]
	}).then(movieCast => {
			res.render('castMovie', {movieCast: movieCast});

		}).catch(err => res.send(err.message));
})


module.exports = router;