const express = require('express');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

// app.use(session({
//   secret: ''
// }))

const movies  = require('./routes/movies')
const cast  = require('./routes/casts')



app.get('/', function(req, res){
  res.send('hello world');
});


app.use('/movies', movies)
app.use('/casts', cast)

app.listen(3000);
