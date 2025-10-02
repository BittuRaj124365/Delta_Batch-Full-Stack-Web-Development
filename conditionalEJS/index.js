const express=require("express");
const app=express();
const port=3000;
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));
app.listen(port,(req,res)=>{
    console.log(`This app is running of ${port} port.`);
});
app.get("/",(req,res)=>{
    res.render("this is root.");
});
app.get("/rolldice",(req,res)=>{
    let diceValue=Math.floor(Math.random()*6)+1;
    res.render("/diceCondition.ejs",{diceValue});;
});
