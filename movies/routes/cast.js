const express = require('express')
const router = express.Router()
const Model = require('./../models')

router.get('/', function (req, res) {
    Model.Cast.findAll().then((dataCasts) => {
        res.render('cast', { dataCasts: dataCasts })
    })
})




module.exports = router