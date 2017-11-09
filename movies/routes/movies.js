const router = require('express').Router();
const models = require('../models');

module.exports = router
  .get('/', async (req, res) => {
    try {
      const movies = await models.Movie.findAll({
        order: [['released_year', 'DESC']]
      });
      res.render('movies/all-movies', {movies});
    } catch (err) {
      console.error(err);
    }
  })

  .get('/addcasts/:id', async (req, res) => {
    const casts = await models.Cast.findAll();
    const movie = await models.Movie.findById(req.params.id);
    res.render('movies/add-casts', {casts, movie})
  })

  // .post('/addcasts/:id', async (req, res) => {
  //   try {

  //   } catch (err) {
  //     console.error(err);
  //   }
  // });