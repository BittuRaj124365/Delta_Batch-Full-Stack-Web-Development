let btn=document.querySelector("button");
console.dir(btn);
// btn.onclick=function (){
//     console.log("Button is clicked.");
// };
// function buttonAction(){
//     console.log("button is clicked.");
// };
// btn.onclick=buttonAction;
let btns=document.querySelectorAll("button");
console.dir(btns);
function buttonsReaction(){
    alert("hiii");
};
function buttonReaction2(){
    alert("there !");
}
for(btn of btns){
    btn.addEventListener("click",buttonsReaction);
    btn.addEventListener("click",buttonReaction2);
};