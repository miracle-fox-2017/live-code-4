const express = require('express')
const router = express.Router();

const Models = require('../models')

router.get('/', function (req, res) {
    Models.Cast.findAll().then((rows) => {
        res.render('cast', {rowsCast : rows})
    })
})

// router.get('/add', function(req, res){
//     Models.Cast.findById(req.params.id).then((rows) =>{
//         rows.create().then((rowsUpdate)=> {
//             res.render('addcast', {rowsUpdate : rowsUpdate})
//         })
//     })
// })

// router.get('/casts/edit/:id', function(req, res){
//     Models.Cast.findById(req.params.id).then((rows) => {
//         rows.Cast.update().then((rowsUpdate) => {
//             res.render('editcast', {rowsUpdate : rows})
//         })
//     })
// })

// router.get('/casts/delete/:id', function(req, res){
//     Models.Cast.destroy().then((rows) =>{
//         res.render('deletecast', {rowsDelete: rows})
//     })
// })

module.exports = router
