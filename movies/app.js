const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.locals.Helper = require('./helpers/helper');

// Route
const indexRoute = require('./routers/indexRoute');
app.use('/', indexRoute);

const movieRoute = require('./routers/movieRoute');
app.use('/movies', movieRoute);

const castRoute = require('./routers/castRoute');
app.use('/casts', castRoute);

app.listen(3000, (err) => {
	console.log('Listen 3000')
});