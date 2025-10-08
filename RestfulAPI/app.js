const express=require("express");
const app=express();
const port=5050;
const path=require("path");
app.path("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`This app is running on port ${port}.`)
})

let posts=[
    {
        username:"Bittu",
        content:"I love sleeping"
    },
    {
        username:"shehnawaz",
        content:"He love dancing"
    }
]

app.get("/",(req, res)=>{
    res.send("Server working well !!!");
})