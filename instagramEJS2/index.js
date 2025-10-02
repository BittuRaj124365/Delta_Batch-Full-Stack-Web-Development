const express=require("express");
const app=express();
const port=1000;
app.listen(port,(req,res)=>{
    console.log(`This app is running on port: ${port} `);
});

app.get("/insta/:username",(req,res)=>{
    let {username}=req.params;
    let userData=require("./data.json");
    const data=userData[username];
    console.log(data);
    if(data){
        res.render("insta.ejs",{data});
    } else{
        res.render("error.ejs");
    }
});
