const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');
const userdata = require('../model/userModel')

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.get("/check",function(req,res){
    var item = {
        email:req.query.uid,//Part#2 point 10
        password:req.query.pwd
    };
  

    
    userdata.findOne(
        {email:item.email,password:item.password},(err,user)=>{
            if (err) console.log(err);
      else {
        if (user === null) {
          console.log("invalid credentials");
          res.redirect("/signup");
        // } else if (user.userName == "admin") {
        //   res.redirect("/admin");
        } else {
          console.log("login successful");
          res.redirect("/home");
        }
      }
        }
    )


});




module.exports = loginRouter;