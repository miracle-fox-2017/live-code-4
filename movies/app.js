const express  = require('express')
var bodyParser = require('body-parser')
const app      = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))


const movie = require('./routes/movie')
const cast  = require('./routes/cast')


app.use('/movie', movie)
app.use('/casts', cast)

app.get('/', (req, res)=> {
	res.send('jalan guys')
})

app.listen(3000)