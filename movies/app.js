const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set the view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

let index = require('./routes');
app.use('/', index);

let movie = require('./routes/movies');
app.use('/movies', movie);

let cast = require('./routes/cast');
app.use('/cast', cast);

app.listen(3000);
