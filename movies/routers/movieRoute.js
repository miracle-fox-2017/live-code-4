const express = require('express');
const router = express.Router();
const Models = require('../models');

router.get('/', (req, res) => {
	Models.Movie.findAll({ order: [['released_year', 'DESC']] })
	.then(allMovies => {
			res.render('allMovie', {movies: allMovies});
	}).catch(err => res.send(err.message));
})

router.get('/:id/addCast', (req, res) => {
	Models.Movie.findById(req.params.id, {
		include: [{
			model: Models.MovieCast,
			include: [{
				model: Models.Cast
			}]
		}]
	}).then(movieCast => {
			Models.Cast.findAll({ order: [['first_name', 'ASC']] })
				.then(allCast => {
						res.render('giveCast', {movieCast: movieCast, casts: allCast});
				}).catch(err => res.send(err.message));

		}).catch(err => res.send(err.message));
})

router.post('/:id/addCast', (req, res) => {
	if (req.body.role !== "") {
		Models.MovieCast.create({
			CastId : +req.body.CastId,
			MovieId: +req.body.MovieId,
			role: req.body.role
		}).then(allModelData => {
			res.redirect('/movies');
		}).catch(err => res.send(err.message));
	} else {
		res.send("Role harus diisi")
	}
})

module.exports = router;