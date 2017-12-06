const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine','ejs')
app.use(express.static(__dirname+'/views'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routers
const index = require('./routers/index')
const movie = require('./routers/movie')
const cast  = require('./routers/cast')

app.use('/', index)
app.use('/movie', movie)
app.use('/casts', cast)

app.listen(3000, err => {
  if(!err){console.log('serv listen on port:3000');}
})
