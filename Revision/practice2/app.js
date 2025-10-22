// only normal work in database if there is not error 
// function saveData(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         console.log(internetSpeed);
//         console.log("Data saved to Database.");
//     } else console.log("Week Connection.");
// };

// some another functions that depends upon succession of first case
function saveData2(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
        success();
    } else failure();
};
saveData2("hii",()=>{
    console.log("Data1 saved.");
    saveData2("there",()=>{
        console.log("Data2 saved.");
        saveData2("I'm B2",()=>{
            console.log("Data3 saved.");
            saveData2(" !",()=>{
                console.log("Data4 saved.");
            },()=>{
                console.log("Week connection,data4 not saved.");
            });
        });
    },()=>{
        console.log("Week connection,data2 not saved.");
    });
},()=>{
    console.log("Week connection,data1 not saved.");
});