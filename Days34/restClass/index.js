const { fileLoader } = require("ejs");
const express=require("express");
const app=express();
const port=5050;
const path=require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
    console.log(`This app is running on port ${port}`);
}) 

let posts=[
    {
        username:"Bittu",
        content:"I love coding"
    },
    {
        username:"Bicky",
        content:"He is a programmar"
    },
    {
        username:"Satyam",
        content:"He is an Engineer"
    },
    {
        username:"ankit",
        content:"He is an Software"
    }
    
]
app.get("/posts",(req,res)=>{
    // res.send("Server is running well !!");
    // instead of send, we will render post to ejs file
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("newPost.ejs");
})
app.post("/posts",(req,res)=>{
    // console.log(req.body);// by doing this, we can store the username and content in terminal
    let {username,content}=req.body;// we are extracting username and content from body that are stored in req.body.
    //after geting the username and content from body
    // we can simply push it to the post object
    posts.push({username,content});
    // res.send("Post is working well !!");// instead of this, we can redirect the posts page
    res.redirect("/posts");// this /posts is the same post that we created above.
})

app.get("/",(req,res)=>{
        res.send("Server is working well !!");
})