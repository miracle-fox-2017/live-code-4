const express = require('express')
const app = express()

app.set('view engine', 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const movies = require('./routers/movies')
const casts = require('./routers/casts')

app.use('/movies', movies)
app.use('/casts', casts)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
