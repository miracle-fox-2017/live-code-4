 const express = require('express')
 const bodyParser = require('body-parser')
 const app = express()
 const db = require('./models')
 const movie = require('./routers/movie')
 const cast = require('./routers/cast')
 
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
  
 // parse application/json
 app.use(bodyParser.json())
 
 app.set('views', './views')
 app.set('view engine', 'ejs');
 
 app.use('/movies', movie)
 app.use('/casts', cast)
 
 app.listen(3000, function () {
   db.sequelize.sync();
   console.log('Example app listening on port 3000!')
 })