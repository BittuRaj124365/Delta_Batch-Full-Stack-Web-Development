let gameSequence=[];
let userSequence=[];
let btns=["yellow","red","purple","green"];

let gameStarted=false;
let level=0;
let h2=document.querySelector("h2");

// for start the game
document.addEventListener("keypress",function(){
    if(gameStarted==false){
        console.log("gameStarted");
        gameStarted=true;
        levelUp();
    }

});
function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function gameFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    // random button choose
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    let randBtn=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randBtn);
}
function checkAns(){
    // console.log(`currentLevel ${level}`);
    let idx=level-1;
    if(userSequence[idx]===gameSequence[idx]){
        h2.innerText=`level ${level}`;
    } else{
        h2.innerText=`gameOver, press any key to start again !`;
    }
}
function buttonPress(){
    let btn=this;
    gameFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    checkAns();
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}