function rollDice(){
    let rand=Math.random();
    let n=rand*6;
    let num=Math.floor(n+1);
    console.log(num);
}
function oneToN(num){
    let sum=0;
    for (let i=0; i<=num; i++){
        sum+=i;
    }
    return sum;
}
console.log(oneToN(10));
// rollDice();