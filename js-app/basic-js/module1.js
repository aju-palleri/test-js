const Customer=function(){
    let customer={};
    let _id,_name;

    customer.setId=function(id){
        _id=id;
    }
    customer.setName=function(name){
        _name=name;
    }

    customer.getDetails=function(){
        return `Name is ${_name} and id is ${_id}`;
    }

    return customer;
}();//IIFE(Immediately invoked function expression)



//const cust=makeCustomer();
Customer.setId(12);
Customer.setName("Suyash");
console.log(Customer.getDetails());

//console.log(cust);