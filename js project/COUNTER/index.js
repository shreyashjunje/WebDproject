let count=0;
const increasebtn=document.querySelector('#increase');
const decreasebtn=document.querySelector('#decrease');

increasebtn.addEventListener("click",function(){
    h1=document.getElementById("counter");
    let countvalue=++count;
    h1.innerText=countvalue;
})


decreasebtn.addEventListener("click",function(){
    h1=document.getElementById("counter");
    let countvalue=--count;
    h1.innerText=countvalue;
})

