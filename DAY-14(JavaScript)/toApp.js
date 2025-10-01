let toDo=[];
let req=prompt("Enter your request ");
while(true){
    if(req=="quit" || req=="Quit"){
        console.log("Quiting the app.");
        break;
    }if(req="list"){
        console.log("------")
        for(task of toDo){
            console.log(task);
        }
        console.log("------")
    }else if(req=="add" || req=="Add"){ 
        let task=prompt("Enter your task:");
        toDo.push(task);
        console.log("Task added.");
    }else if(req=="delete" || req=="Delete"){
        toDo.pop();
        
    }
}