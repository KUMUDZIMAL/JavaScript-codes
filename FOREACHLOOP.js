//using NOrmal function
let arr=[1,2,3,4,5,6];

// arr.forEach(function square(val){

// let squaredvalue;
// squaredvalue=val*val;
// console.log(squaredvalue);

// })
//using arrow function
console.log(arr.join(' '));
let result=[];
 arr.forEach((value,index,arr)=>{
let sqvalue;
sqvalue=value*value;
result.push(sqvalue,index);



}
)
console.log(result.join(' '));
console.log(arr)
// let sq=(value)=>{
//     let sqvalue;
//     sqvalue=value*value;
//    console.log(sqvalue);
    
    
//     }

//     sq(20);
const hii=arr.map((value)=>{
    console.log("kcvbk")
return value*2;

}

)
console.log(hii);