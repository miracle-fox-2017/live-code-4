const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movie = require('./router/movie')
const cast = require('./router/cast')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/movies',movie)
app.use('/casts',cast)


app.listen(3000, () => console.log('Example app listening on port 3000!'))
