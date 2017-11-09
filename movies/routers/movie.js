const express = require('express');
const router  = express.Router();
const db      = require('../models');

router.get('/', (req, res) => {
    db.Movie.findAll({ order: [['released_year', 'DESC']]}).then((dataMovies) => {
        res.render('movie', { dataMovies });
    }).catch((err) => {
        res.send(err);
    })
    
});


router.get('/add/:id', (req, res) => {
    let getId = req.params.id; 
    db.Cast.findAll().then((dataCasts) => {
        res.render('addmoviecast', { id: getId , dataCasts });
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/add/:id', (req, res) => {
    db.MovieCast.create(req.body).then((getData) => {
        res.redirect('/movies');
    }).catch((err) => {
        res.send(err);
    });
});



module.exports = router;