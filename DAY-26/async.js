async function printName(){
    throw "page 404 not found";
    return "Bittu Raj";
}
printName().then(()=>{
    console.log("Printed Successful.");
}).catch((error)=>{
    console.log("Week connection.");
    console.log("error is: ",error);
})