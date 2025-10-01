let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    
    let deleteButton=document.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.classList.add("delete");
    item.appendChild(deleteButton);
    ul.appendChild(item);
    input.value="";
})
//for deleting the task along with button option
ul.addEventListener("click",function(event){
    console.log(event.target); 
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})