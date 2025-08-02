// console.dir(document.head);
// document.body.style.backgroundColor="pink";
// document.body.innerText="byee";
// let headings=document.getElementsByClassName("hi");
// console.dir(headings);
// console.log(headings);
// let idd=document.getElementById("chutiya");
// console.dir(idd);
// console.log(idd);                      
// let classes=document.getElementsByClassName("BC");
// console.dir(classes);
// console.log(classes);

//query selector
// let queries=document.querySelector(".hiooo");
// console.dir(queries);
// console.log(queries);                                                             
// let queries=document.querySelector(".hiooo");  
// console.dir(queries);
// console.log(queries);
// let example=document.querySelectorAll(".sample");
// console.dir(example);
// console.log(example);
// let example2=document.querySelectorAll("#idsample");
// console.dir(example2);
// console.log(example2);
// in document.getElementsByClassName if the class is not associated to any element then it will print empty html collection 
// in document.getElementById if the id is not associated to any element then it will print null 
// in document.querySelector if the id is not associated to any element then it will print null 
// in document.querySelector if the class is not associated to any element then it will print null 
// in document.querySelectorAll if the id is not associated to any element then it will print empty node list
// in document.querySelectorAll  if the class is not associated to any element then it will print empty node list
// let heading=document.querySelector("#idsample").children;    // we can access children of any element by document.querySelector only
// console.log(heading);
// let firstCHILD=document.body.firstElementChild;
// console.dir(firstCHILD);
// console.log(firstCHILD);
// let SecondCHILD=document.body.lastChild;
// console.dir(SecondCHILD);
// console.log(SecondCHILD);
// let heading2=document.querySelector("#idsample")
// let heading3=document.querySelector(".sample")
// console.log(heading2.innerText);
// console.log(heading2.innerHTML);
// console.log(heading3.innerText);
// console.log(heading3.textContent);
// first child property
// let DIVISION1=document.querySelector(".DIV1");
// console.log(DIVISION1.firstChild);
// console.dir(DIVISION1.firstChild);
// let DIVISION2=document.querySelector(".DIV2");
// console.log(DIVISION2.firstChild);
// console.dir(DIVISION2.firstChild);
// let DIVISION3=document.querySelector(".DIV3");
// console.log(DIVISION3.firstChild); // returns actual comment
// console.dir(DIVISION3.firstChild); // returns comment node(comment object from window object)
// if node is document
// console.log(document.firstChild); // doesn't return text node even if space is given
// console.dir(document.firstChild);  // doesn't return text node  even if space is given
// console.log(document.lastChild); //returns full html code
// console.dir(document.lastChild);  // return html object from window object
// console.log(document.firstElementChild);  //returns full html code
// console.dir(document.firstElementChild); //return html object from window object
// console.log(document.lastElementChild);    //returns full html code
// console.dir(document.lastElementChild); //return html object from window object