const { faker }=require("@faker-js/faker");
const mysql=require("mysql2");
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"deltaApp",

    password:"124365"
});
let q="INSERT INTO user (id,username,email,password) VALUES ?";
let users=[["241","Bittu","Bittu123@gmail.com","124365"],
        ["425","ankit","ankt123@gmail.com","547136"]
    ];
try{
    connection.query(q,[users],(result,error)=>{
        if(error){
            throw error;
        }else{
            console.log(result);
        };
    })
}catch{
    console.log(error);
}
// to close the connection after execution b/w sql and vs
connection.end();
let createRamdomUser=()=>{
    return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    };
};
