function Customer(id,name){
    this.id=id;
    this.name=name;
}
Customer.prototype.getDetails=function(){
    return `id is ${this.id} and name is ${this.name}`;
}


// class Customer{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
//     getDetails(){
//         return `id is ${this.id} and name is ${this.name}`;
//     }
// }

let c1=new Customer(10,"Jay");
console.log(c1);
console.log(c1.getDetails());

