const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const index = require('./routes/index')
const cast = require('./routes/cast')
const movie = require('./routes/movie')

app.use('/', index)
app.use('/casts', cast)
app.use('/movies', movie)

app.set('view engine', 'ejs');


app.listen(3000, function () {
    console.log("Haloooo")
})
