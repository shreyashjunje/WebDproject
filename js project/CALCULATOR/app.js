let string="";
let btns=document.querySelectorAll('.button');
let input=document.querySelector('#input');
let AC = document.getElementById("AC");
let DEL=document.getElementById("DEL")
let per=document.getElementById('percent');



AC.addEventListener("click",()=>{
    string="";
    input.value="";
})
// DEL.addEventListener("click",()=>{
   
//     console.log("hi");
// })
// Per.addEventListener("click",()=>{
    
    
// })

Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",function(event){
       
        if(event.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }else{
            string=string + event.target.innerHTML;
            input.value=string; 
        }
    })
})


