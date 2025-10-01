let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("Para is clicked.");
});
// for div box
let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Mouse entered in the box.");
});

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("clicked");
    // for character movement
    // left,right,upward,downward
    if(event.code=="ArrowUp"){
        console.log("character moved forward.");
    }else if(event.code=="ArrowDown"){
        console.log("character moved downward.");
    }else if(event.code=="ArrowLeft"){
        console.log("characgter moved left.");
    }else if(event.code=="ArrowRight"){
        console.log("character moved right.");
    }
});
