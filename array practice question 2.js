let items= [500,400,700,900,600];
let i=0
for(let val of items){
let offer=val/10;
items[i]=items[i]-offer;
console.log(`${items[i]} at ${i}`);
i++;

}
console.log(items);

// let items= [500,400,700,900,600];
// let i=0
// for(let val of items){
// let offer=val/10;
// val=val-offer;
// console.log(`${val} at ${i}`);
// i++;

// }
// console.log(items);