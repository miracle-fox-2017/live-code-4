const express = require('express');
const router = express.Router();

const Model = require('../models')


router.get('/', function(req,res) {
	Model.Movie.findAll({
		order: [['released_year','DESC']]
	}).then(allMovie => {
		res.render('movie', {allMovie : allMovie});
	})
})

router.get('/addcast/:id', function(req,res) {
	Model.Movie.findAll({
		include : [{
			model : Model.Cast
		}]
	}).then(modelwithcast => {
		res.render('addmoviecast', {modelwithcast : modelwithcast})
	})
})

router.post('/addcast/:id', function(req,res) {
	console.log(req.body)
	Model.MovieCast.update(req.body)
})

module.exports = router