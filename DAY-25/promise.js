// callback hell using normal nested

function saveToData(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else failure();
};
// function calling here
saveToData("hii",()=>{
    console.log("Data1 saved.");
    saveToData("There,This",()=>{
        console.log("Data2 saved.");
        saveToData("is B2 ",()=>{
            console.log("Data3 saved.");
            saveToData("Raj !",()=>{
                console.log("Data4 saved.");
            },()=>{
                console.log("Week Connection for Data4.");
            });
        },()=>{
            console.log("Week Connection for Data3.");
        });
    },()=>{
        console.log("Week Connection for Data2.");
    })
},()=>{
    console.log("Week Connection for Data1.");
});

// callback using Promise
function saveData(data){
// here,resolve and reject is nothing but success and failure respectively.
    return new Promise((resolve,reject)=>{
        let netSpeed=Math.floor(Math.random()*10)+1;
        if(netSpeed>4){
            resolve("Data successfully Saved.");
        }else reject("week connection.");
    });
}
// let request=saveData("Hii there!");
// request.then(()=>{
//     console.log("Promise is resolved.");
// })
// .catch(()=>{
//     console.log("Promise is rejected.");
// });


//instead of using variable we can directly call
console.log("----Promise by alternative----");
saveData("Hii there!")
.then((result)=>{
    console.log("data-1 saved");
    console.log("result is: ",result);
    return saveData("This ");
})
.then((result)=>{
    console.log("data-2 saved");
    console.log("result is: ",result);
    return saveData("is ");
})
.then((result)=>{
    console.log("data-3 saved");
    console.log("result is: ",result);
})
.catch((error)=>{
    console.log("error is: ",error);
    console.log("Promise has been rejected.");
    console.log("And so on,for further data's...");
});