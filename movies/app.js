const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const index = require('./routers/index');
const casts = require('./routers/casts');
const movies = require('./routers/movies');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', index);
app.use('/casts', casts);
app.use('/movies', movies);

app.set("view engine", "ejs");

app.listen(3000,(err)=>{
  if(!err){
    console.log('Jalan di port 3000');
  } else {
    console.log(err);
  }
})
