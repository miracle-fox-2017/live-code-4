const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const movie = require('./routers/movie')
const cast = require('./routers/cast')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.use('/movie', movie)
app.use('/cast', cast)


app.listen(3000)
