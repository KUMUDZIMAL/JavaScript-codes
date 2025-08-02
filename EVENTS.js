// let DIVISION=document.querySelector(".DIV3");
// DIVISION.onclick=(evt)=>{
// console.log("div was clicked");
// alert("byee");
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX);
// console.log(evt.clientY);
// }
// let boxes=document.querySelectorAll(".one1");



// boxes.forEach((box)=>{
//     box.onmouseover=(evt)=>{
//     console.log("you are in a box");
   
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     }}
// )
// one doubt why clientX and clientY  values always changes for the same element?
let ONEDIV=document.querySelector(".one2");
ONEDIV.addEventListener("click",(evt)=>{
console.log(evt);
console.log(evt.type);
console.log(evt.target);
})
 const VAR=(evt)=>{

    console.log(evt.clientX);
    console.log(evt.clientY);
 }
 
 
 
 ONEDIV.addEventListener("click",VAR)
// one doubt why clientX and clientY  values always changes for the same element?

// ONEDIV.addEventListener("click",(evt)=>{   
//     console.log(evt.clientX); 
//     console.log(evt.clientY);
   
//     })

//     ONEDIV.removeEventListener("click",(evt)=>{   // this wont work! for explanation refer to shraddha khapra js playlist lec8 23min 44s onwards
//         console.log(evt.clientX); 
//         console.log(evt.clientY);
       
//         })
         
    ONEDIV.removeEventListener("click",VAR); // this will work
    
