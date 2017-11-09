const express = require('express');
const router  = express.Router();
const db = require('../models');
const umur = require('../helpers/umur.js');

router.get('/', (req, res) => {
    db.Cast.findAll({ order: [['first_name', 'ASC']] }).then((dataMovies) => {
        res.render('cast', { dataMovies });
    }).catch((err) => {
        res.send(err);
    })

});

router.get('/add', (req, res) => {
    let gender = ['male','female'];
    res.render('addcast', { gender });
});

router.post('/add', (req, res) => {
    db.Cast.create(req.body).then((getData) => {
        res.redirect('/casts');
    }).catch((err) => {
        res.send(err);
    });    
});

router.get('/edit/:id', (req, res) => {
    let gender = ['male', 'female'];
    db.Cast.findById(req.params.id).then((dataCast) => {
        res.render('editcast', { dataCast, gender });
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/edit/:id', (req, res) => {
    db.Cast.update(req.body, { where: { id: req.params.id } }).then((getCast) => {
        res.redirect('/casts');
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/delete/:id', (req, res) => {
    db.Cast.destroy({ where: { id: req.params.id } }).then((removeCast) => {
        res.redirect('/casts');
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/seemovie/:id', (req, res) => {
    let gender = ['male', 'female'];
    db.MovieCast.findAll({
        where:{ CastId : req.params.id },
        include:[db.Movie]
    }).then((dataCast) => {
        dataCast.forEach(function(element) {
            element.Movie.umur = umur(element.Movie.released_year);   
        });

        // console.log(umur(3000));
        res.render('seemovie', { dataCast });
        // res.send(dataCast);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;