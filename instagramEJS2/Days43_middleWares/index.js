const express=require("express");
const app=express();
const port=5050;
app.listen(port,()=>{
    console.log(`App is listening of port ${port}`);
})
app.use((req,res,next)=>{
    // let {query}=req.query;
    // console.log(query);
    console.log("i'm a middleware.");
    // res.send("middleWare called.");
    next();
})
app.use((req,res,next)=>{
    console.log("I'm the sedond middleWare.");
    next();
    
})
app.get("/random",(req,res)=>{
    res.send("This is a random page.");
})
app.get("/",(req,res)=>{
    console.log("You contacted root directry.");
    res.send("Root directry contacted.");
})
