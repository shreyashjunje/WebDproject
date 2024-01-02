let btn=document.querySelector('button');

btn.addEventListener("click",async ()=>{
  let p=document.querySelector('p');
  let ans= await getjokes();
  
  p.innerText=ans;
})



let url='https://icanhazdadjoke.com/';


async function getjokes(){
 try{
  const header={headers: {
    'Accept':"application/json"
  }};
  let res=await axios.get(url,header);
  return res.data.joke;

 }catch(e){
  return e;
 }
}

// async function getjokes(){
//   try{
//     let res=await fetch(url, {headers: {
//       'Accept': 'application/json'
//     }
//     });
//     let op=await res.text();
//     let data=await JSON.parse(op);
//     return data.joke;

//   }catch(e){
//     return e;
//   }
// }

