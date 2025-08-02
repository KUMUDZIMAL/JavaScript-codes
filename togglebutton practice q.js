let BTN=document.querySelector(".btn")
let BODY=document.querySelector("body");
let flag=0



BTN.addEventListener("click",()=>{
    if(flag===0){
        console.log("dark")
BODY.style.backgroundColor="black";
flag=1


}

else{
    console.log("light")
BODY.style.backgroundColor="WHITE";
flag=0

}
})



