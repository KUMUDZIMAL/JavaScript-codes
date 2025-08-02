//callback hell
// function getData(dataId,getNextData){
// setTimeout(()=>{console.log("Data",dataId)
// if(getNextData){
//     getNextData();

// }},2000)}

// getData(7,()=>{
// console.log("getting data 8");
//     getData(8,()=>{
        
// console.log("getting data 9");
//         getData(9,()=>{
            
// console.log("getting data 10");
//             getData(10);
//         })
//     });
// })

//Promises
// let promise=new Promise((resolve, reject)=>{

//     console.log("I AM A PROMISE");
//     resolve("success");

// })
// console.log(promise);
// let promise=new Promise((resolve, reject)=>{

//     console.log("I AM A PROMISE");
//     reject("some error occured");

// })
// const getPromise=()=>{
// return new Promise((resolve, reject)=>{
// console.log("I AM A PROMISE");
// resolve("success");
// }
// )}


// let PROMISE=getPromise();
// PROMISE.then((res)=>{
// console.log("promise fulfilled",res);

// });
// const getPromise=()=>{
//     return new Promise((resolve, reject)=>{
//     console.log("I AM A PROMISE");
//     reject("some error");
//     }
//     )}
    
    
//     let PROMISE=getPromise();
//     PROMISE.catch((err)=>{
//     console.log("promise rejected",err);
    
//     });   
function getData(dataId){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("Data",dataId);
    resolve("success");
    },2000)})}
// // promise chain
// console.log("getting data 1");
// getData(1).then((res)=>{
//     console.log("getting data 2");
//     return getData(2)
// }).then((res)=>{
//     console.log("getting data 3");
//     return getData(3);
// }).then((res)=>{
//     console.log("getting data 4");
//     return getData(4);
// })
// async function getAllData(){
// console.log("getting data 1 ");
// await getData(1);
// console.log("getting data 2 ");
// await getData(2);
// console.log("getting data 3 ");
// await getData(3);
// }
// console.log(getAllData());
//IIFE
(async function getAllData(){
    console.log("getting data 1 ");
    await getData(1);
    console.log("getting data 2 ");
    await getData(2);
    console.log("getting data 3 ");
    await getData(3);
    })();

