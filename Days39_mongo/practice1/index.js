const mongoose=require("mongoose");
main()
.then((res)=>{
    console.log("connection successful.");
}).catch((err)=>{
    console.log("connection failed.",err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1.27017/test");
}