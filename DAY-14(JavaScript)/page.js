// let hindi=13;
// let maths=3;
// console.log((hindi+maths)/2);

// let year=null;
// console.log(year);
// year+=1;
// console.log(year);

// let str="Bittu";
// console.log(typeof(str));
// console.log(str);
// let num=18;
// console.log(typeof(num));
// console.log(num);
// console.log(str+num);
// let v=num+str;
// console.log(v);
// console.log(typeof(v));
// console.log("Hii");


// let x=43;
// let y=32;
// console.log("Ths sum is: "+(x+y));
// //    or 
// console.log(`The sum is: ${x+y}`);

// console.error("This is an erroe"); 
// alert("Something gonna fucking wrong");
// console.warn("this is a warn");

// let _name=promt("Enter your name:");
// console.log(_name);
// let title=prompt("Enter your title");
// console.log(_name+title);

        // to remove space from starting and end only 

// let str="   Bittu Raj   ";
// console.log(str);
// console.log(str.trim());

   // to convert str into lower or upper case 

// let str="Bittu Raj";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str); // no change in main str

        // for finding the index in string
        
// let str="Bittu Raj";
// console.log(str.indexOf("ttu"));//return 1st index of string only
// console.log(str.indexOf("R"));
// console.log(str.indexOf("k"));// return -1 if not exist in string
// console.log(str.indexOf(" "));
// console.log(str.indexOf("bittu"));// return -1 because no letter starts with small

        // use more than one methods at once 

let str="    bittu Raj   ";
// let suppose use wants to remove the space along with converting it into uppercase, he can use variable for each operation. We can use operations/methods at once.
// console.log(str.trim().toUpperCase());
// console.log(str);

//         // array 
// let arr=["hii", 4,"Bittu",4.2, true];
// console.log(arr); 
// console.log(arr[3]);
// console.log(arr[2][1]);
//     // Note:- Arrays are Muttable 
// console.log(arr.push("bmw"));
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift("audi"));
// console.log(arr.unshift("maruti"));
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.indexOf(true));
// console.log(arr.indexOf("Bittu"));
// console.log(arr.indexOf(false));
//     // merge two array in one arr
// let arr1=['a','b','c','d'];
// let arr2=['e','f','g','h'];
// console.log(arr1.concat(arr2));
// console.log(arr1.reverse());
// console.log(arr2.reverse());
// console.log(arr1.sort());
// console.log(arr2.sort());

                // // favourite movie
// let movie="kgf";
// let guess=prompt("Enter movie name: ");
// while((guess!=movie) || (guess=="quit")){
//         console.log("Wrong");
//         guess=prompt("");
// }

//         // for-of-loops
// const arr=["abc",3.2,"Bittu",true, false];
// for(i of arr){
//         console.log(i);
// }
// for (i of "Bittu Raj"){
//         console.log(i);
// }

        // object literals
// const student={
// // const means like making it is fix, like reference which means we can only changes its internal things like its value or data but we can't change its address.
//         name:"Bittu Raj",
//         roll:35084,
//         marks:94.5,
//         isPresent:true
// };
// console.log(student);
// const item={
//         price:32.4,
//         isDiscount:true,
//         discount:4,
//         color:["red","blue","green"]
// };
// console.log(item);
// const post={
//         username:"@rajb2",
//         content:"This is my first post",
//         likes:59,
//         comments:73,
//         tag:["@sh.anand","@harshitPrasad"],
//         repost:7
// };
// console.log(post.username);
// console.log(post["repost"]);
// // updating the pre-existing key's value
// post.likes=78;
// console.log(post.likes);
// // adding a new key with value
// post.shares=54;
// console.log(post.shares);
// // also to delete key
// delete post.shares;
// delete post.likes;
// console.log(post); 
// // object of object(nested object)
// const studentData={
//         Bittu:{
//                 Marks:94.4,
//                 City:"Bihar"
//         },
//         Anand:{
//                 Marks:99.9,
//                 City:"Bihar"
//         },
//         Aman:{
//                 Marks:96.9,
//                 City:"Delhi"
//         }
// };
// console.log(studentData.Aman);
// console.log(studentData.Bittu["Marks"]);
// console.log(studentData.Anand.City);
// console.log(studentData.Anand.Marks="100");
// console.log(studentData);

        // Maths methods 
// console.log(Math.abs(43));
// console.log(Math.abs(-14.8));
// console.log(Math.pow(4,2));
// console.log(Math.floor(4));
// console.log(Math.floor(4.9999));
// console.log(Math.floor(-9));
// console.log(Math.floor(-4.5));
// console.log(Math.ceil(4));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4));
// console.log(Math.ceil(-5.2));
// console.log(Math.random());

        // try and catch 
// let b=4;
// console.log(b);
// try{
//         console.log(a);
// } catch{
//         console.log("a is not defined.");
// }

        // arrow function 
// const sum=(a,b)=>{
//         return a+b;
// };
// const mul=(a,b)=>( 
//         a*b
// );
// console.log(mul(2,4));
// let add=sum(2,4);
// console.log(add);

        // set timeout 
// console.log("hii");
// setTimeout(()=>{
//         console.log("This is B2");
// },4000);
// console.log("Nice to meet You!");

// let id=setInterval(()=>{
//         console.log("Hii");
// },2000);

// let id2=setInterval(()=>{
//         console.log("Bittu");
// },2000);
// setTimeout(()=>{
//         clearInterval(id2);
// },12000);
