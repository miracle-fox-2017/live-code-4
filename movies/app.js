const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', cast)
app.use('/', movie)

app.listen(3000,function(){
    console.log('test berjalan..!!')
 })