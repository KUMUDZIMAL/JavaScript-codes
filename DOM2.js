// let STYLING=document.querySelectorAll(".one")
// //STYLING.style.backgroundColor; //This is wrong bcoz document.querySelectorAll returns nodelist ie many elemnts so for that direct style property is not there so we need to iterate over each element
// STYLING.forEach((ELEMENT)=>{
// ELEMENT.style.backgroundColor="green";


// })
// let hiddenproperty=document.querySelector("#idsample");
//  hiddenproperty.style.visibility = "hidden";
// let SPAN=document.querySelector("span");
// let Attribute= SPAN.getAttribute("class");
// console.log(Attribute);

// SPAN.setAttribute("style", "background-color: red;");
// let STYLE= SPAN.getAttribute("style");
// console.log(STYLE);
// SPAN.innerText="4 baj gaye lekin party abhi baki hai";
// SPAN.style.fontSize="50px";

// let DISPLAY=document.querySelectorAll(".one");
// let newbtn=document.createElement("button");
// newbtn.innerText="NEW BUTTON";
// console.log(newbtn);

// DISPLAY.forEach((div)=>{

//     div.append(newbtn);           //this is wrong The reason your code only works for the last element is that you're using the same newbtn button element for each iteration of the loop. When you append the same button element to multiple elements, it actually moves the button from one place to another in the DOM, rather than creating a new button each time.
// });
// let DISPLAY=document.querySelectorAll(".one");
// DISPLAY.forEach((div)=>{
//     let newbtn=document.createElement("button");
// newbtn.innerText="NEW BUTTON";
// console.log(newbtn);
//     // div.append(newbtn);       
//     //   div.prepend(newbtn);     
//     // div.before(newbtn); 
//     // div.after(newbtn);
//     // div.appendChild(newbtn);

// });
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<b><i>Hii! I am Sanjana</i></b>";
// document.querySelector("body").prepend(newHeading);
// let para=document.querySelectorAll("p");
// para.forEach((p)=>{
// p.remove();

// }

// )
// let btn=document.createElement("button");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// document.querySelector("body").prepend(btn);


// let DIVS=document.querySelector(".DIV5");
// console.log(DIVS.classList);

// DIVS.classList.add("newClass");
// DIVS.classList.remove("newClass");

// let MYELEMENT=document.querySelector(".DIV2");
// console.log(MYELEMENT.children); // returns node list of children(only element nodes)
// console.log(MYELEMENT.childNodes); // returns node list of children(non element nodes are also included like text and comment nodes)
// console.log(MYELEMENT.children[0]); // returns first child 
// console.log(MYELEMENT.childNodes[0]); // returns first child 
// console.log(MYELEMENT.children[1]);