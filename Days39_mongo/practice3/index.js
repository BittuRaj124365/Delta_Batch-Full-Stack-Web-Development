const mongoose=require("mongoose");
// mongoose.connect("mongodb://127.0.0.1.27017/test");
main()
.then((res)=>{
    console.log("connection successful.");
}).catch((err)=>{
    console.log("connection failed.",err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1.27017/test");
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose.model("User",userSchema);
// const employee1=new User({
//     name:"Bittu Raj",
//     emai:"bittu123@gmail.com",
//     age:19
// })
// const employee2=new User({
//     name:"Harsh",
//     email:"harsh123@gmail.com",
//     age:17
// })
// employee1.save();
// employee2.save();
User.find({})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
// employee2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// to insert multiple data
// User.insertMany([
//     {name:"peter",email:"peter@gmail.com",age:23},
//     {name:"bruce",email:"bruce@gmail.com",age:24},
//     {name:"tony",email:"tony@gamil.com",age:24}
// ]).then((res)=>{
//     console.log(res);
// })