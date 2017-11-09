const parser=require("body-parser");
const express=require("express");
const app=express();

app.set("views","./views");
app.set("view engine","ejs");

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const movie=require("./routers/movie");
app.use("/movie",movie);

const cast=require("./routers/cast");
app.use("/casts",cast);

app.listen(3000,()=>{
    console.log("Port 3000");
});
