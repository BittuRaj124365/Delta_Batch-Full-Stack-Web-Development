const h1=document.querySelector("h1");
function changeColor(color){
    h1.style.color=color;
}
setTimeout(()=>{
    changeColor("red");
},1000);
setTimeout(()=>{
    changeColor("blue");
},2000);
setTimeout(()=>{
    changeColor("yellow");
},3000);
setTimeout(()=>{
    changeColor("green");
},4000);


const h2=document.querySelector("h2");
function changeColor2(color,delay){
    setTimeout(()=>{
        h2.style.color=color;
    },delay);
};
changeColor2("red",1000);
changeColor2("yellow",2000);
changeColor2("blue",3000);


const h3=document.querySelector("h3");
function changeColor3(color,delay,nextColor){
    setTimeout(()=>{
        h3.style.color=color;
        if(nextColor) nextColor();
    },delay);
};
changeColor3("red",1000,()=>{
    changeColor3("blue",1000,()=>{
        changeColor3("yellow",1000,()=>{
            changeColor3("pink",1000);
        })
    })
})

