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




module.exports = router