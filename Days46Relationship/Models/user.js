const mongoose=require("mongoose");
const {Schema}=require("mongoose");
main()
.then(()=>{
    console.log("Connection Successful.");
})
.catch((err)=>{
    console.log("Connection error:",err);
})
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {
            location:String,
            city:String
        },
    ],
});
const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:"Bittu Raj",
        addresses:[
            {   
                // _id: false,
                location:"f50 Ber Sarai",
                city:"Delhi"
            },
        ], 
    });
    user1.addresses.push({location:"f18 Hauz Khas", city:"New Delhi"});
  let result= await user1.save();
  console.log(result);
} 

addUsers();