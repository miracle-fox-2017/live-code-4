const express = require('express')
const router = express.Router()
const Models = require('../models');

router.get('/', (req, res) =>{
    Models.Movie.findAll().then((movieData)=>{
        res.render("movies",{movieData:movieData})
    })
    
})




module.exports = router