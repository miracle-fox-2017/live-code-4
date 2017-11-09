
const express = require('express')
const app = express()
const movies = require('./routers/movies')
const bodyParser = require('body-parser')
const casts = require('./routers/casts')

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine



app.use('/movies',movies)
app.use('/casts',casts)



app.listen(3000,()=>{
    console.log('listening----------------------')
})