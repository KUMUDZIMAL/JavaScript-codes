class toyotaCar{
    constructor(brand){
this.brandName=brand;
console.log("brandname is ",brand);

    }
start(){
    console.log("STARTED");
}
stop(){
    console.log("STOPPED");
}
// setBrandName(brand){
//     this.brandName=brand;
//     console.log("brandname is ",brand); 
// }

}
let fortuner=new toyotaCar("fortuner");
console.log(fortuner);
fortuner.start();
// fortuner.setBrandName("fortuner");
let lexus=new toyotaCar("lexus");
console.log(lexus);
lexus.start();
// lexus.setBrandName("lexus");
fortuner.stop();
lexus.stop();