const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/userModel')
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.post("/adduser",function(req,res){
    
    var item = {
        firstname:req.body.fname,
        lastname:req.body.lname,
        email:req.body.uid,
        password:req.body.pwd
    };
    console.log(item);
    var signupData = userdata(item)
    signupData.save()
    // console.log(signupData);
    res.redirect("/login");
})

module.exports = signupRouter;