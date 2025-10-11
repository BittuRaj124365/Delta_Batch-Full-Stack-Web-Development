const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const connection=mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"deltaApp5",
    password:"124365"
})
let q="INSERT INTO studentData (id,username,email,password) VALUES ?";
let getRandomUser=()=>{
    return[
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    ];
};
let data=[];
for (let i=1; i<=10; i++){
    data.push(getRandomUser());
}
try{
    connection.query(q,[data],(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch{
    console.log(err);
}
connection.end();