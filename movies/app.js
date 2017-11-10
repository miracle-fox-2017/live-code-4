const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const cast = require('./routes/cast')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/casts', cast)
app.get('/', function(req, res){
    res.send('adsdsad')
})

app.listen(3000)
