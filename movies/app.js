var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

const index = require('./routes/index')
const cast = require('./routes/cast')
const movie = require('./routes/movie')
// app.use(bodyParser.json())
app.use('/', index)
app.use('/casts', cast)
app.use('/movies', movie)

app.set('view engine', 'ejs');


app.listen(3000, function () {
    console.log("Haloooo")
})
