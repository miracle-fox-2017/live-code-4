const express=require('express');
const app = express();
const bodyParser =require('body-parser')




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.set('views','./views')
app.set('view engine','ejs')

// const session = require('express-session')

// Router
const movie = require('./routers/movie')
const cast = require('./routers/cast')

// app.use('/',(req,res)=>{
//   res.send("this is home")
// })

//movie
app.use('/movies',movie)
//Cast
app.use('/casts',cast)

app.listen(3000)
