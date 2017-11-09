const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Model = require('./../models')

router.get('/', function (req, res) {
    Model.Cast.findAll().then((dataCasts) => {
        res.render('cast', { dataCasts: dataCasts })
    })
})

router.get('/add', function (req, res) {
    res.render('cast-add')
})
router.post('/add', function (req, res) {
    // console.log(req.body)
    Model.Cast.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birth_year: req.body.birth_year,
        gender: req.body.gender
    }).then(() => {
        res.redirect('/casts')
    }).catch((reason) => {
        res.render(reason)
    })
})
router.get('/delete/:id', function (req, res) {
    Model.Cast.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/casts')
    })
})

router.get('/edit/:id', function (req, res) {
    Model.Cast.findById(req.params.id).then((dataCast) => {
        res.render('cast-edit', { dataCast: dataCast })
    })
})

router.post('/edit/:id', function (req, res) {
    Model.Cast.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birth_year: req.body.birth_year
    }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect('/casts')
        })
})

router.get('/:id/listMovies', function (req, res) {
    Model.Cast.findOne({
        where: {
            id: req.params.id,

        },
        include: [Model.Movie]
    }).then((dataCasts) => {
        //res.send(dataCasts)
        res.render('list-movies', { dataCasts: dataCasts })
    })

})



module.exports = router