const express = require('express');
const router = express.Router();

const Model = require('../models')

router.get('/', function(req,res) {
	Model.Cast.findAll()
	.then(allCast => {
		res.render('cast', {allCast : allCast})
	})
})

router.get('/add', function(req,res) {
	Model.Cast.findAll().then(allCast => {
		res.render('addcast', {allCast : allCast})
	})
})

router.post('/add', function(req,res) {
	console.log(req.body)
	Model.Cast.create(req.body).then(()=> {
		res.redirect('/casts')
	})
})

router.get('/edit/:id', function(req,res) {
	Model.Cast.findOne({
		where : {
			id : req.params.id
		}
	}).then(edited => {
		res.render('edited', {edited : edited})
	})
})

router.post('/edit/:id', function(req,res) {
	Model.Cast.update(req.body,{
		where : {
			id : req.params.id
		}
	}).then(() => {
		res.redirect('/casts')
	})
})

router.get('/delete/:id', function(req,res) {
	Model.Cast.destroy({
		where : {
			id : req.params.id
		}
	}).then(() => {
		res.redirect('/casts')
	})
})

module.exports = router