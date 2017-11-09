const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

const movies = require('./routers/movies')
const casts = require('./routers/casts')

app.use('/movies', movies)
app.use('/casts', casts)

app.listen(3000, () => {
  console.log('Listening on port 3000...');
})
