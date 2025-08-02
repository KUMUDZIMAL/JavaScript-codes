let str="Apna College";
 str=str.replaceAll("l","u");
console.log(str.length);


let str1="I ";
let str2="love ";
let str3="My India ";

let str5=str1+str2+str3;
console.log(str5);
let str6=str1.concat(str2);
console.log(str6);

//generate username on basis of fullname
let FULLNAME=prompt("ENTER YOUR FULL NAME");
console.log("@"+FULLNAME+FULLNAME.length);