const express = require('express');
const router = express.Router();
const Model = require('../models');

// router.get('/', (req, res)=> {
//   res.render('movies', { pageTitle: 'MOVIES' });
// });

router.get('/', (req, res)=> {
  Model.Movie.findAll().then((results) => {
    res.render('movies.ejs', { error: null, dataContacts: results });
  });
});

module.exports = router;
