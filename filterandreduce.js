// // filter
// let arr=[78,90,98,67,56]
// let merit=[];
// let toppers=arr.filter((val)=>{
//     // merit.push (val>=90);
// return val>=90;

// }




// )
// console.log(toppers);
//reduces
let n=prompt("ENTER A NUMBER");
let i;
let arr2=[];
for(i=1;i<=n;i++){
arr2[i-1]=i;  // arr2[0]=1,arr2[1]=2 ,arr[2]=3
}

let sum=arr2.reduce((res,curr)=>{
return res+curr;
}

)
let factorial=arr2.reduce((res,curr)=>{
return res*curr;

}
)
console.log(arr2);
console.log("sum is",sum);
console.log("factorial is",factorial);