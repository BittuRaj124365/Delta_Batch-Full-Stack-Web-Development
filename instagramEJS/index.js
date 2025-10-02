const express=require("express");
const app=express();
const port=2000;
app.listen(port,(req,res)=>{
    console.log(`This app is running on ${port} local host.`);
});
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let followers=["bittu","anand","vicky"];
    res.render("inFb.ejs",{username,followers},);
});

app.get("/fb/:username",(req,res)=>{
    let {username}=req.params;
    res.render("inFb.ejs",{username});
});
