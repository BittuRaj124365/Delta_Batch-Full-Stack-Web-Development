const { fileLoader } = require("ejs");
const express=require("express");
const app=express();
const port=5151;
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
    console.log(`This app is running on port ${port}.`);
})
app.get("/",(req,res)=>{
    res.send("The server working well !!");
})
let posts=[
    {
        id:"1a",
        username:"Bittu",
        profession:"engineer",
        content:"Hello world"
    },
    {
        id:"2a",
        username:"Bicky",
        profession:"programmar",
        content:"hello earth"
    },
    {
        id:"3a",
        username:"satyam",
        profession:"doctor",
        content:"hello mars"
    },
    {
        id:"4a",
        username:"shubham sharma",
        profession:"police",
        content:"hello pluto"
    }
]
app.get("/posts",(req,res)=>{
    // res.send("The server is working well !!");
    res.render("posts.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    // res.send("The server is working well !!");
    res.render("newPost.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,profession,content}=req.body;
    posts.push({username,profession,content});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=> id === p.id);
    // console.log(post);
    // res.send("id is working well !!");
    res.render("postInDetail.ejs",{post})
})