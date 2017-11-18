const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pg = require('pg')
//routing
const movie = require('./routes/movie')
const cast  = require('./routes/cast')

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json


app.use('/movies', movie)
app.use('/casts', cast)


app.get('/', (req, res) => res.send('Hello World Index!'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))