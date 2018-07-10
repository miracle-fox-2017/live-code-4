const express = require('express');
const router = express.Router();
const Model = require('../models');

router.get('/',(req,res)=>{
    Model.Cast.findAll().then(dataCast=>{
        res.render('casts',{dataCast:dataCast})
    })
})


router.get('/addCast',(req,res)=>{
    res.render('addCast')
})


router.post('/addCast',(req,res)=>{

    Model.Cast.create({

        first_name:reg.body.first_name,
        last_name:reg.body.last_name,
        birth_year:reg.body.birth_year,
        gender:reg.body.gender
    })
    .then(function(newCast){
        // console.log(newStudent)
        res.redirect('/casts');
    }).catch((err)=>{
        let errorMsg = err.errors[0].message
        //   res.send(errorMsg)
          res.render('addCast')
    });
});

router.get('/delete/:id',(req,res)=>{
    Model.Cast.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(function(){
        res.redirect('/casts');
    });
});

router.get('/editCast',(req,res)=>{
    Model.Cast.findAll({where:{id:req.params.id}}).then(dataCast=>{
        res.render('editCast',{dataCast:dataCast})
    })
})
router.post('/edit/:id',(req,res)=>{
    
        Model.Cast.update({
    
            first_name:reg.body.first_name,
            last_name:reg.body.last_name,
            birth_year:reg.body.birth_year,
            gender:reg.body.gender
        },{where:{id:req.params.id}})
        .then(function(newCast){
            // console.log(newStudent)
            res.redirect('/casts');
        }).catch((err)=>{
            let errorMsg = err.errors[0].message
            //   res.send(errorMsg)
              res.render('addCast')
        });
    });


module.exports = router