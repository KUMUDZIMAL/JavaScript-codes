
let DATA="SECFET INFORMATION";

class user{
    constructor( NAME ,EMAIL){

        this.name=NAME;
        this.email=EMAIL;
        console.log("HEYY!");
    }
    viewData(){
        console.log(DATA);

    }

}
let user1=new user("KUMUD","kumud@gmail.com");
let user2=new user("SANGITA","sangita@gmail.com");
// console.log(user1);
// console.group(user2);
// console.log(user1.viewData());
class Admin extends user{

    constructor(NAME,EMAIL){
        super(NAME,EMAIL);
this.name=NAME;
this.email=EMAIL;


    }
editData(){
    DATA="SECRET REVEALED";
console.log(DATA);


}


}
let admin1=new Admin("KUMUD","kumud@gmail.com");
//  console.log(admin1);
//  console.log(admin1.editData());