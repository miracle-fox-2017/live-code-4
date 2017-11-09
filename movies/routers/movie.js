const Model=require("../models");
const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    Model.Movie.findAll().then((rows)=>{
        res.render("movie",{movies:rows});
    }).catch((err)=>{
        res.send(err);
    });
});

router.get("/addcast/:id",(req,res)=>{
    Model.Movie.findById(req.params.id).then((data)=>{
        Model.Cast.findAll().then((casts)=>{
            res.render("add-cast",{movie:data,casts:casts});
        });
    }).catch((err)=>{
        res.send(err);
    });
});

router.post("/addcast/:id",(req,res)=>{
    Model.MovieCast.create({
        CastId:req.body.cast,
        MovieId:req.body.movie,
        role:req.body.role
    }).then((stats)=>{
        res.redirect("/movie");
    }).catch((err)=>{
        res.send(err.errors[0].message);
    });
});

module.exports=router;
