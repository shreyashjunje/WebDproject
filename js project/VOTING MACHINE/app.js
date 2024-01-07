let arr=[];

// let numberArray = arr.map(function(element) {
//     return parseInt(element, 10); // 10 is the radix/base for decimal numbers
// });
let btns=document.querySelectorAll('.btn');
let voting_result_btn=document.querySelector('#result');




    btns.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            console.log("hi");
            arr.push(parseInt(btn.value,10));
            
        })
    })





function votingResult(arr){
    let count=0;
    let element;
    // let i=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        
        if(count==0){
        
            element=arr[i];
        }
        if(arr[i]==element){
            
            count++;
        }else{
            count--;

        }
    }
    // console.log(count);
    

}



voting_result_btn.addEventListener("click", votingResult);





