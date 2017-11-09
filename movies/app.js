const express = require('express');
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

const movie = require('./routes/movie');
const cast = require('./routes/cast');
//==================================================

app.use('/movie', movie);
app.use('/casts', cast);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, function(req, res){
  console.log('Hello 3000 !')
})
