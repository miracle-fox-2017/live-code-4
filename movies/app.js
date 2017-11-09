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


app.get('/', function(req, res){
  res.send('hello world');
});

// const  = require('./routes/')
// app.use('/', )

app.listen(3000);
