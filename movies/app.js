const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views','./views');
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const Movie = require('./router/movie');
const Cast = require('./router/cast');


app.get('/',function(req,res) {
  res.send('masuk')
})

app.use('/',Movie)
app.use('/',Cast)

app.listen(3000,function() {
  console.log('masuk');
})
