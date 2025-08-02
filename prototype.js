let marks=95;
const student={
fullName:"KUMUD ZIMAL",
age:20,
printAge:function(){
    console.log("AGE IS",this.age);
    console.log("MARKS IS",marks);
}



}
// student.printAge();
const EMPLOYEE={
    // below both ways are valid for defining a method in object
// calcTax(){
//     console.log("TAX RATE IS 10%");
// }           
calcTax:function(){
    console.log("TAX RATE IS 10%");   
}


}
// EMPLOYEE.calcTax();
const SIDDHARTH={
age:39,
calcTax:function(){
    console.log("TAX RATE IS 20%");     
}

}
SIDDHARTH.__proto__=EMPLOYEE;
console.log(SIDDHARTH);
SIDDHARTH.calcTax();  // IF OBJECT AND PROTOTYPE HAVE SAME METHOD,OBJECT'S METHOD WILL BE USED

