const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(3000, () => console.log('are u still with me?'))

const MovieRouter = require('./routers/movie.js')
app.use('/movies', MovieRouter)

const CastRouter = require('./routers/cast.js');
app.use('/cast', CastRouter)


//Pisahkan routing ke dalam file yang berbeda, perhatikan penamaan dan pembagian routing. Routing yang sembarangan akan mengakibatkan pengurangan 10 poin
