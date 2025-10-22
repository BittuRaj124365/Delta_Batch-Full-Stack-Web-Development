const express=require("express");
const app=express();
let port=5050;
app.listen(port,()=>{
    console.log(`This app is running of port ${port}.`);
})
app.get("/",(req,res)=>{
    res.send("You contacted Root Directry.");
})
app.get("/apple",(req,res)=>{
    res.send("You contacted Apple.")
})
app.get("/litchi",(req,res)=>{
    res.send("You contacted Litchi.");
})
app.get("/banana",(req,res)=>{
    res.send("You contacted Banana.");
}) 

// app.use((req,res)=>{
//     console.log("Request Received.");
// })