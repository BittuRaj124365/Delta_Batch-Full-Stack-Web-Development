// for h1, approach 1 to change color
h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="white";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);
// setTimeout(function(){
//     h1.style.color="green";
// },4000);
// setTimeout(function(){
//     h1.style.color="black";
// },5000);

// for h2, approach 2 to change color
// h2=document.querySelector("h2");
// function changeColor(colors,delay){
//     setTimeout(()=>{
//         h2.style.color=colors;
//     },delay);
// };
// changeColor("black",2000);
// changeColor("yellow",3000);
// changeColor("green",4000);
// changeColor("black",5000);

// for paragraph, approach 3 to change color
let p=document.querySelector("#para");
// setTimeout(()=>{
//     p.style.color="blue";
// },5000);
// function changeColors(color,delay,changeNextColor){
//     setTimeout(()=>{
//         p.style.color=color;
//         changeNextColor();
//     },delay);
// };
// changeColors("white",1000,function(){
//     changeColors("blue",1000,function(){
//         changeColors("pink",1000,function(){
//             changeColors("black",1000);
//         });
//     });
// });


// trying to geting rid of that callback hell with the help of Promise setting

function changeColors(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed.");
        },delay);
    })
};
changeColors("blue",1000).then(()=>{
    console.log("color1 changed.");
    return changeColors("pink",1000);
}).then(()=>{
    console.log("color2 changed.");
    return changeColors("Yellow",1000);
}).then(()=>{
    console.log("color3 changed.");
    return changeColors("black",1000);
}).then(()=>{
    console.log("color4 changed.");
    return changeColors("white",1000);
})