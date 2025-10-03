// let student={
//     name:"Bittu Raj",
//     class:13,
//     isStudent:true,
//     roll:35084
// }
// console.log(student);
// let jsonStudent=JSON.stringify(student);
// console.log(jsonStudent);
// let stu=jsonStudent;
// let jsonResponse=JSON.parse(stu);
// console.log(jsonResponse);
// console.log(jsonResponse.name);
// console.log(jsonResponse.isStudent);
let url="https://catfact.ninja/fact";
// fetch(url);

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact);
}).catch((error)=>{
    console.log("error:",error);
})
console.log(url);