//wrap the variables and functions in on scope

function makeCustomer(){

    let _id, _name;
    let customer={};
    
    customer.setId=function(id){
        _id=id;
    }

    customer.setName=function(name){
        _name=name;
    }
    customer.getDetails=function(){
        return `customer name :${_name} and id is ${_id}`;
    }

    return customer;

}

let cust=makeCustomer();
console.log(cust);
cust.setId(101);
cust.setName("Mahesh");
console.log(cust.getDetails());