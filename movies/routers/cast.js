const Model=require("../models");
const express=require("express");
const router=express.Router();

const kepoUmur=(lahir,cast)=>{
}

router.get("/",(req,res)=>{
    Model.Cast.findAll().then((castRows)=>{
        res.render("cast",{castRows:castRows});
    }).catch((err)=>{
        res.send(err);
    });
});

router.post("/add",(req,res)=>{
    Model.Cast.create(req.body).then((stats)=>{
        res.redirect("/casts");
    }).catch((err)=>{
        res.send(err);
    });
});

router.get("/edit/:id",(req,res)=>{
    Model.Cast.findById(req.params.id).then((row)=>{
        res.render("edit-cast",{data:row});
    }).catch((err)=>{
        res.send(err);
    });
});

router.post("/edit/:id",(req,res)=>{
    Model.Cast.update(req.body,{
        where:{
            id:req.body.id
        }
    }).then((stats)=>{
        res.redirect("/casts");
    }).catch((err)=>{
        res.send(err);
    });
});

router.get("/delete/:id",(req,res)=>{
    Model.Cast.destroy({
        where:{
            id:req.params.id
        }
    }).then((stats)=>{
        res.redirect("/casts");
    }).catch((err)=>{
        res.send(err);
    });
});

router.get("/castmovie/:id",(req,res)=>{
    Model.MovieCast.findAll({
        where:{
            CastId:req.params.id
        }
    }).then((rows)=>{
        console.log(rows);
    }).catch((err)=>{
        res.send(err);
    })
});

module.exports=router;
