const express=require("express");
const app=express();
const port=1705;
app.listen(port,(req,res)=>{
    console.log(`App is running of port ${port}`);
})
app.get("/",(req,res)=>{
    res.send("You contacted root directry.");
})
// creating a middleWare
// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="getAccess") next();
//     res.send("ACCESS DENIED !!");
// });
// instead sending some error, we can send error by itself
app.use("/apple",(req,res,next)=>{
    let key=req.query;
    if(key==="allowed") next();
    throw new Error("Access Denied !!");
})
app.get("/api",(req,res)=>{
    res.send("Here is Your data.");
})