const app = require('express')();
const bodyParser = require('body-parser');

const index = require('./routes/index');
const movies = require('./routes/movies');
const casts = require('./routes/casts');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/movies', movies);
app.use('/casts', casts);

app.listen(3000)