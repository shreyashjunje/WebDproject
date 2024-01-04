const red=document.querySelector('#red');
const blue=document.querySelector('#blue');
const yellow=document.querySelector('#yellow');
const green=document.querySelector('#green');
const purple=document.querySelector('#purple');

let profile_name=document.querySelector('#name');
let follow_lists=document.querySelectorAll('.follow_list');
let background_color=document.querySelector('#background_div');
let btns=document.querySelectorAll('.btn'); 
let toggle=document.querySelector('#toggle');
// let body=document.getElementsByTagName('body');
let body=document.querySelector('body');
let main_div=document.querySelector('#main_div');


red.addEventListener("click",()=>{
    follow_lists.forEach((follow_list)=>{
        follow_list.style.color="red";
    })
    profile_name.style.color="red";
    
    background_color.style.backgroundColor="red";
    btns.forEach((btn)=>{
        btn.style.borderColor="red";
        btn.style.color="red";
    })
    btns.forEach((btn)=>{
        btn.addEventListener("mouseenter",()=>{
           btn.style.backgroundColor="red";
           btn.style.color="white";
        })
        btn.addEventListener("mouseleave",()=>{
           btn.style.backgroundColor="white";
           btn.style.color="red";
        })
   
      })
})

blue.addEventListener("click",()=>{
    follow_lists.forEach((follow_list)=>{
        follow_list.style.color="blue";
    })
   
   btns.forEach((btn)=>{
     btn.addEventListener("mouseenter",()=>{
        btn.style.backgroundColor="blue";
        btn.style.color="white";
     })
     btn.addEventListener("mouseleave",()=>{
        btn.style.backgroundColor="white";
        btn.style.color="blue";
     })

   })
   
    btns.forEach((btn)=>{
        btn.style.borderColor="blue";
        btn.style.color="blue";
        
        
    })
    profile_name.style.color="blue";
    
    background_color.style.backgroundColor="blue";
})

yellow.addEventListener("click",()=>{
    follow_lists.forEach((follow_list)=>{
        follow_list.style.color="yellow";
    })
    profile_name.style.color="yellow";
    
    background_color.style.backgroundColor="yellow";
    btns.forEach((btn)=>{
        btn.style.borderColor="yellow";
        btn.style.color="yellow";
    })
    btns.forEach((btn)=>{
        btn.addEventListener("mouseenter",()=>{
           btn.style.backgroundColor="yellow";
           btn.style.color="white";
        })
        btn.addEventListener("mouseleave",()=>{
           btn.style.backgroundColor="white";
           btn.style.color="yellow";
        })
   
      })
})

green.addEventListener("click",()=>{

    green.addEventListener('mouseover',()=>{
    
       
    })


    follow_lists.forEach((follow_list)=>{
        follow_list.style.color="green";
    })
    profile_name.style.color="green";
    
    background_color.style.backgroundColor="green";
    btns.forEach((btn)=>{
        btn.style.borderColor="green";
        btn.style.color="green";
    })
    btns.forEach((btn)=>{
        btn.addEventListener("mouseenter",()=>{
           btn.style.backgroundColor="green";
           btn.style.color="white";
        })
        btn.addEventListener("mouseleave",()=>{
           btn.style.backgroundColor="white";
           btn.style.color="green";
        })
   
      })
})

purple.addEventListener("click",()=>{
    follow_lists.forEach((follow_list)=>{
        follow_list.style.color="purple";
    })
    profile_name.style.color="purple";
    
    background_color.style.backgroundColor="purple";
    btns.forEach((btn)=>{
        btn.style.borderColor="purple";
        btn.style.color="purple";
    })
    btns.forEach((btn)=>{
        btn.addEventListener("mouseenter",()=>{
           btn.style.backgroundColor="purple";
           btn.style.color="white";
        })
        btn.addEventListener("mouseleave",()=>{
           btn.style.backgroundColor="white";
           btn.style.color="purple";
        })
   
      })
})


toggle.addEventListener("click",()=>{


body.classList.toggle('whitebg');  
// console.log(body.classList.contains()); 
main_div.classList.add("blackbg");
main_div.classList.toggle("blackbg");
// toggle.classList.toggle("blackbg");


    
    
    
})
