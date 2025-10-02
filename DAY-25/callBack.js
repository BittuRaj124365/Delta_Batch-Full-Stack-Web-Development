function hello(){
    console.log("hello");
}
function mello(){
    console.log("mello");
    hello();
}
mello();

function one(){
    return 1;
}
function two(){
    return 1+ one();
}
function three(){
    return 1+two();
}
function four(){
    let sum=1+three();
    return sum;
}
console.log(four());
