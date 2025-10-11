const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"deltaApp",
    password:"124365"
});
let q="INSERT INTO user (id,username,email,password) VALUES ?";
let createRamdomUser=()=>{
    return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    ]
};
let data=[];

for (let i=1; i<=10; i++){
    console.log(createRamdomUser());
}
try{
    connection.query(q,(error,result)=>{
        if(error) throw error;
        else console.log(result);
    })
}catch{
    console.log(error);
}
connection.end();
