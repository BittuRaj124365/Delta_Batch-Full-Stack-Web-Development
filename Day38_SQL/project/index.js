const express=require("express");
const mysql=require("mysql2");
const {faker}=require("@faker-js/faker");
const app=express();
let port=5050;
app.listen("/",(req,res)=>{
    console.log(`App is running of port ${port}.`);
});

const {v4:uuidv4}=require("uuid");// v4 is the version 4
 //uuidv4();// this function call will gerenate the unique id wherever it will implement.
const path=require("path");
app.path("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let connection=createConnection({
    host:"localhost",
    user:"root",
    database:"student_",
    password:"124365"
});
let getRandomUser=()=>{
    return[
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    ];
};
let q="INSERT INTO studentData (id,username,email,password) VALUES ?";
let data=[];
for (let i=1; i<=10; i++){
    console.log(getRandomUser());
}
try{
    connection.query(q,(error,result)=>{
        if(error) throw error;
        console.log(result);
    })
}catch{
    console.log(error);
}
connection.end();