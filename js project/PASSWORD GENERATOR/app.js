const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%&*+-_?/';

let generate_btn=document.querySelector('#generate_btn');
let uppercase_inp=document.querySelector('#uppercase');
let loercase_inp=document.querySelector('#loercase');
let numbers_inp=document.querySelector('numbers');
let symbols_inp=document.querySelector('#symbols');
const answer=document.querySelector('#answer');


let slider=document.querySelector('#slider');
const slider_value=document.querySelector('#slider_value');



slider_value.innerText=slider.value;
slider.addEventListener("input",(event)=>{
    slider_value.innerText=slider.value;
})


let value=5;
let inp=uppercase_inp.value;


function generatestring(characters){
    let result="";
    characterlength=characters.length();
   
    result=result+characters.charAt(Math.floor(Math.random()*characterlength));
        
    
    return result;
}



generate_btn.addEventListener("click",()=>{
    answer.innerText=generatestring();
});



                                                                                                           

// function generatestr(value){
//     let result=" ";
//     let characterlength=characters.length;
//     for(let i=0;i<value;i++){
//         result=result+characters.charAt(Math.floor(Math.random()*characterlength));
//     }
//     return result;
// }



