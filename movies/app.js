const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var models = require('./models/cast');


var cast = require('./routes/cast');
var movie = require('./routes/movie');
//var index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

app.use('/',cast)
app.use('/cast',cast)
app.use('/movie',movie)

app.listen(3000);

// seed:generate --name demo-user
