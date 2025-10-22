const express=require("express");
const app=express();
let port=5050;
app.listen(port,()=>{
    console.log(`The app is running on port ${port}`);
})

app.get("./",(req,res)=>{
    res.send("You contacted root directry.");
})
app.get("./apple",(req,res)=>{
    res.send("You contacted apple dire.");
})
app.get("./mango",(req,res)=>{
    res.send("You contacted mango dire.");
})
app.get("*",(req,res)=>{
    res.send("You request doesn't exist.");
})
// app.use("./",(req,res)=>{
//     console.log("You contacted root Directry.");
// })