const express = require('express')
const router = express.Router()
const Model = require('./../models')

router.get('/', function (req, res) {
    Model.Movie.findAll({
        order: [
            ['released_year', 'DESC']
        ]
    }).then((dataMovies) => {
        res.render('movie', { dataMovies: dataMovies })
    })
})


router.get('/:id/addCast', function (req, res) {
    Model.Movie.findById(req.params.id).then((dataMovie) => {
        Model.Cast.findAll().then((dataCasts) => {
            res.render('add-cast-movie', { dataCasts: dataCasts, dataMovie: dataMovie, message: '' })
        })
    })
})

router.post('/:id/addCast', function (req, res) {
    // console.log(req.body)
    // if (req.body.role == '') {
    //     req.body.role = null
    // }
    // console.log(req.body.role)
    Model.MovieCast.create({
        CastId: req.body.CastId,
        MovieId: req.params.id,
        role: req.body.role
    }).then(() => {
        res.redirect('/movies')
    }).catch((reason) => {
        Model.Movie.findById(req.params.id).then((dataMovie) => {
            Model.Cast.findAll().then((dataCasts) => {
                res.render('add-cast-movie', { dataCasts: dataCasts, dataMovie: dataMovie, message: reason.Errors[0].msg })
            })
        })
    })
    // Model.Movie.findById(req.params.id).then((dataMovie) => {
    //     Model.Cast.findAll().then((dataCasts) => {
    //         res.render('add-cast-movie', { dataCasts: dataCasts, dataMovie: dataMovie })
    //     })
    // })
})

module.exports = router