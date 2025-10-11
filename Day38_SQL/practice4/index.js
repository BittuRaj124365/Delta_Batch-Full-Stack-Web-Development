const express=require("express");
const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"school",
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
for (let i=1; i<=2; i++){
    data.push(getRandomUser());
}
try{
    connection.query(q,[data],(error,result)=>{
        if(error) throw error
        console.log(result);
    })
}catch{
    console.log(result);
}
connection.end();