const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

const movies = require('./routers/movies')
app.use('/movies', movies)

const cast = require('./routers/cast')
app.use('/casts', cast)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})