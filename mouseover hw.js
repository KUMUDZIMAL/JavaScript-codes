let DETAILS=document.querySelector(".viewbtn")
let P=document.querySelectorAll("p");
let DIV=document.querySelectorAll("div");

let H2=document.querySelector("h2");
let flag=0;

DETAILS.addEventListener("mouseover",()=>{
    if(flag===0){
        console.log("hidden");

H2.style.visibility="hidden";
DIV.forEach((ele)=>{

    ele.style.visibility="hidden";
})
P.forEach((element)=>{

    element.style.visibility="hidden";
})
flag=1

}})
DETAILS.addEventListener("mouseout",()=>{
 if(flag===1){

        console.log("visible")
        H2.style.visibility="visible";
        DIV.forEach((ele)=>{
        
            ele.style.visibility="visible";
        })
        P.forEach((element)=>{
        
            element.style.visibility="visible";
        })
    flag=0;
    }


})

let BTN=document.querySelector(".btn")
let BODY=document.querySelector("body");
let status=0



BTN.addEventListener("click",()=>{
    if(status===0){
        console.log("dark")
BODY.style.backgroundColor="black";
status=1


}

else{
    console.log("light")
BODY.style.backgroundColor="WHITE";
status=0

}
})






