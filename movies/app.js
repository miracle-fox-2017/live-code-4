let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// View engine
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// Router
let movies = require('./routers/movies')
let casts = require('./routers/casts')

// Getting router
app.use('/movies',movies)
app.use('/casts',casts)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
