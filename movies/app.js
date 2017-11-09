const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


const movie = require('./routers/movies');
const cast = require('./routers/cast')

app.use('/movie',movie)
app.use('/casts',cast)



app.listen(3000, () => console.log('Example app listening on port 3000!'))
