const express=require("express");
const app=express();
let port=1000;
app.listen(port, ()=>{
    console.log(`app is listening ${port}`);
});
// app.use((req,res)=>{
//     console.log("Request received.");
//     res.send("This is response message.");
//     console.log(req);
//     res.send(code);
// });
app.get("/",(req,res)=>{
    res.send("Your contact is root.");
});
app.get("/Bittu",(req,res)=>{
    res.send("Your contact is Bittu.");
});
app.get("/chodu",(req,res)=>{
    res.send("Your contact is Chodu cid.");
});
// else condition if path entered by user doesnot exist
app.get("*",(req,res)=>{
    res.send("This path doesn't exist.:)");
});

// for post request
app.post("/",(req,res)=>{
    res.send("You send a post request.");
});
app.post("/chodakar",(req,res)=>{
    res.send("kya re chodu.");
});