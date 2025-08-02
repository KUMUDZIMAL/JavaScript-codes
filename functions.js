//normal function 
// function vowels(str1){
//     let count=0;
//     for(const val of str1){
// if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u"||val==="A"||val==="E"||val==="I"||val==="O"||val==="U"){
// count++;

// }
//     }
// return count;


// }
//  console.log(vowels("KUMUD"));
//  console.log(vowels("SANGITA"));
//  console.log(vowels("pppppp"));
 
 // arrow function

 const vowels= (str2)=>{

    let count=0;
    for(const val of str2){
if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u"||val==="A"||val==="E"||val==="I"||val==="O"||val==="U"){
count++;

}
    }
return count;
 }
  console.log(vowels("KUMUD"));
 console.log(vowels("SANGITA"));
 console.log(vowels("pppppp"));
 
