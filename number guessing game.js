// let gameno=21;
// let userno=prompt("ENTER A NUMBER from 0 to 100");
// for(let i=0;i<=100;i++){
//     userno=parseInt(userno);

//     if(userno<0||userno>100){
//         console.log("please enter number from 0 to 100");
//        userno= prompt("ENTER A NUMBER FROM 0 TO 100");
//     }
//     else{
      
// if(gameno===userno){
//     console.log("great! Thats Correct");
//     break;
// }

// console.log("oops! wrong");
// userno=prompt("TRY AGAIN ");
// }
// }
//above code doesnt work for float values
let gameno=21.6;
let userno=prompt("ENTER A NUMBER from 0 to 100");
while(userno!=gameno){
    userno=prompt("Try again");
}
console.log("CONGRATS!");
