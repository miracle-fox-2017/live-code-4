const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
  db.Movie.findAll({order : [['released_year', 'ASC']]}) // ORDER  !!!! ^ ^
    .then(function(rowMovie) {
      res.render('movie', {rowMovie: rowMovie})
    })
})

module.exports = router;
