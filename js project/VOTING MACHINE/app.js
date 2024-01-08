let arr=[];
let voting_btns=document.querySelectorAll('.voting_btns');
let voting_indicators=document.querySelectorAll('.voting_indicator')
let reset_btn=document.querySelector("#reset_btn");
let result_para=document.querySelector("#result_para");
let result_btn=document.querySelector("#result_btn");
 voting_btns.forEach((voting_btn)=>{
    voting_btn.addEventListener("click",()=>{
       voting_btn.previousElementSibling.style.backgroundColor="green";
       voting_btn.style.backgroundColor="blue"

       setTimeout(()=>{
        voting_btn.previousElementSibling.style.backgroundColor="red";
        voting_btn.style.backgroundColor="#525CEB"

       },400)
    //    voting_btn.previousElementSibling.classList.toggle("green_indicator");
       arr.push(voting_btn.value);
       console.log("hi");
       sort(arr);
    })
 })


function sort(arr){
    arr.sort();
}



function voting_Result(){
  let result_arr=[];
  let count=0;
  let max=-1;
  let element;
  for (let i=0;i<arr.length;i++){
    if(count==0){
        element=arr[i];
    }
    if(arr[i]==element){
        count++;
    }else{
       if(count>max){
        max=count;
        result_arr=[];
        result_arr.push(element);
        
       }else if(count==max){
        result_arr.push(element);
       }
       count=1;
       element=arr[i];
    }
  }
  if(count>max){
    result_arr=[];
    result_arr.push(element);
  }else if(count==max){
    result_arr.push(element);
  }
  return result_arr;
}


reset_btn.addEventListener("click",()=>{
    arr=[];
    result_para.innerText="RESULT ANNOUSEMENT HERE"
    
})


result_btn.addEventListener("click",()=>{
    result_para.innerText= `winner is ${voting_Result()}`;
    result_arr=[];
    arr=[];



})




