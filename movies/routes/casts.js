const router = require('express').Router();
const models = require('../models');

module.exports = router
  .get('/', async (req, res) => {
    try {
      const casts = await models.Cast.findAll();
      res.render('casts/all-casts', {casts});
    } catch (err) {
      console.error(err);
    }
  })

  .get('/add', (req, res) => {
    res.render('casts/add-casts');
  })

  .post('/add', async (req, res) => {
    const castData = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      birth_year: req.body.birthyear,
      gender: req.body.gender
    };

    try {
      await models.Cast.create(castData);
      res.redirect('/casts');
    } catch (err) {
      console.error(err);
    }
  })

  .get('/edit/:id', async (req, res) => {
    try {
      const cast = await models.Cast.findById(req.params.id);
      res.render('casts/edit-casts', {cast});
    } catch (err) {
      console.error(err);
    }
  })

  .post('/edit/:id', async (req, res) => {
    const castData = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      birth_year: req.body.birthyear,
      gender: req.body.gender
    };

    try {
      await models.Cast.update(castData, {
        where: {id: req.params.id}
      });
      res.redirect('/casts');
    } catch (err) {
      console.error(err);
    }
  })

  .get('/delete/:id', async (req, res) => {
    try {
      await models.Cast.destroy({where: {id: req.params.id}});
      res.redirect('/casts');
    } catch (err) {
      console.error(err);
    }
  });