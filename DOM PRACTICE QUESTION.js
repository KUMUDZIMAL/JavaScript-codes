let H2=document.querySelector("h2");
console.dir(H2.innerText);
console.log(H2.innerText);
H2.innerText=H2.innerText+" from Apna College Students";
let DIVS=document.querySelectorAll(".one");
// let idx=1;
// for(let div of DIVS){
//     div.innerText=`this is box ${idx}`;
//     idx++;
// }
DIVS[0].innerText="this is box 1";
DIVS[1].innerText="this is box 2";
DIVS[2].innerText="this is box 3";