const mongoose=require("mongoose");
const chat=require("./models/chats.js");
main()
.then((res)=>{
    console.log("Connection Successful");
}).catch((err)=>{
    console.log("Connection Failer.",err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatApp")
}
// let chat1=new chat({
//     from:"Bittu",
//     to:"Raj",
//     message:"Hii, this is Bittu Raj",
//     createdAt:new Date()
// })
// instead of creating individual chats, we can directly create an object for many chats
let allChats=[
    {from:"Bittu",
    to:"anu",
    message:"Happy Raksha Bandhan ☺ ",
    createdAt:new Date()},
    {from:"anu",
    to:"vicky",
    message:"Happy Raksha Bandhan ☺ ",
    createdAt:new Date()},
    {from:"harsh",
    to:"satyam",
    message:"Happy independence day ☺ ",
    createdAt:new Date()},
    {from:"anjali",
    to:"ankriti", 
    message:"Happy Dussehra ☺ ",
    createdAt:new Date()},
    {from:"soumya",
    to:"arti",
    message:"Happy Diwali ☺ ",
    createdAt:new Date()},
    {from:"priya",
    to:"aman",
    message:"Happy Chaths ☺ ",
    createdAt:new Date()}
];
chat.insertMany(allChats);
// chats.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })