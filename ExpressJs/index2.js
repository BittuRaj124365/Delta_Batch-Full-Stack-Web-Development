const express=require("express");
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});

// for nodemon
app.get("/:usernames",(req,res)=>{
    console.log(req.params);
    res.send("This is get root.");
});
app.post("/:usernames",(req,res)=>{
    console.log(req.params);
    res.send("This is post root.");
})
// username with id
app.post("/:usernames/:id/:sex",(req,res)=>{
    console.log(req.params);
    res.send("this is post root along with username, id and sex.:)");
})
