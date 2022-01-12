var express=require("express");

const res = require("express/lib/response");

var router=express.Router();
 
router.get("/",function(req,res){
    console.log("Im here")
    res.render("index");
});

module.exports=router;