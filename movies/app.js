const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Movie = require('./routers/movie')
const Cast = require('./routers/cast')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use('/movie', Movie)
app.use('/casts', Cast)

app.listen(3001);