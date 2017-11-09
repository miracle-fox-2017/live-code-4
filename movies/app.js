const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movies = require('./routers/movies');
const casts = require('./routers/casts');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/movies', movies)
app.use('/casts', casts)

app.get('/', function (req, res) {
  res.render('home');
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})