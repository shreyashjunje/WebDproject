let count=0;
let array=[];
let number=Math.floor(Math.random()*100)+1;

let input=document.querySelector('#input');
let guess_btn=document.querySelector('#guess_btn');
let guess_count=document.querySelector('#guess_count');
let rightguess_div=document.querySelector('#guess_right')

 while(number!=input.value){
    count++;
    guess_count.innerText=count;
 }


