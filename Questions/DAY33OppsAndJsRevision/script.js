// function name(params) {
//     function personMaker(name,age){
//         const person={
//             name: name,
//             age: age,
//             talk(){
//                 console.log(`hii, I'm ${name}.`);
//             },
//         };
//         return person;
//     }
// }

function Person(name,age){
    this.name=name;
    this.age=age;
}
let p1=new Person("Bittu",18);
let p2=new Person("Anand",20);
console.log(p1);


// let p1=personMaker("Bittu Raj",18);
// console.log(p1);
