const URL="https://cat-fact.herokuapp.com/facts";
const FACT=document.querySelector("#fact");
const btn=document.querySelector("#btn");
let promise=fetch(URL);
console.log(promise);
// async function getFacts(){
//     console.log("getting data......");
// let response= await fetch(URL);
// console.log(response);
// console.log(response.status);
// let data= await response.json();
// console.log(data);
// console.log(data[3].text);

// FACT.innerText=data[3].text;

// }

// both ways are right
// btn.addEventListener("click",()=>{getFacts()})  
// btn.addEventListener("click",getFacts)

function getFacts(){
fetch(URL).then((response)=>{
    return response.json();
}).then((data)=>{
    FACT.innerText=data[2].text;

}

)



}
// both ways are right
btn.addEventListener("click",()=>{getFacts()})  
btn.addEventListener("click",getFacts)