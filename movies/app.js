const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views','./views');
app.set('view engine','ejs');


const Movie = require('./routers/movie');
app.use('/movies',Movie);

const Cast = require('./routers/cast');
app.use('/casts', Cast);


app.listen(3000,function(){
    console.log('go');
})