const express = require('express');
const router = express.Router();
const Model = require('../models');

router.get('/', (req, res)=> {
  Model.Cast.findAll().then((results) => {
    res.render('cast.ejs', { error: null, dataContacts: results });
  });
});

//add
router.get('/add', (req, res) => {
  res.render('addCast.ejs', { pageTitle: 'Add Cast' });
});

router.post('/add', (req, res) => {
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let birth_year = req.body.birth_year;
  let gender = req.body.gender;
  Model.Cast.create({
    first_name: first_name,
    last_name: last_name,
    birth_year: birth_year,
    gender: gender
  })
  .then(function (dataContacts) {
    res.redirect('../cast');
  }).catch((err) => {
    // res.send(err.errors[0].message)
    res.render('addCast', { error: err, pageTitle: 'Add Cast' });
  });
});

// delete
router.get('/delete/:id', function(req, res) {
  Promise.all([
    Model.Cast.destroy({
      where: {
        id: req.params.id
      }
    }),
  ]).then(function () {
    res.redirect('../../cast');
  }).catch(err => {
    console.log(err);
  });
});

// edit
router.get('/edit/:id', (req, res) => {
  Model.Cast.findById(req.params.id).then(data => {
    res.render('editCast', {
      data: data
    });
  });
});

// update post
router.post('/edit/:id', (req, res) => {
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let birth_year = req.body.birth_year;
  let gender = req.body.gender;
  Model.Cast.update({
    first_name: first_name,
    last_name: last_name,
    birth_year: birth_year,
    gender: gender
  }, { where: { id: req.params.id } })
  .then(function (data) {
    res.redirect('../../cast');
  });
});

module.exports = router;
