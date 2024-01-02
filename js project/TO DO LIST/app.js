let input = document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
// let closebtn=document.querySelector("class");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let closebtn=document.createElement("button");
    item.innerText=input.value;
    closebtn.innerText="delete";
    closebtn.classList.add("close");
    ul.appendChild(item).append(closebtn);
    // ul.appendChild(closebtn);
    input.value="";
    console.log("hi");
})

let closebtn=document.querySelector(".close");


closebtn.addEventListener("click",function(){
    ul.removeChild(item);
})