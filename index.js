const express=require("express");
const app=express();
const port= 3000;
app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.send("This is Madharjaat.");
// });

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("HELLO CHODU CID.");
});
app.get("/rolldice1",(req,res)=>{
    res.render("rolDice1.ejs");
});
app.get("/rollDice",(req,res)=>{
    let diceValue=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{value : diceValue});
});
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});