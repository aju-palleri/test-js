function makeCustomer(){
    let customer={};
    let _id,_name;

    customer.setId = function(id){
        if(id>0){
            _id=id;
        }
    }

    customer.setName=function(name){
        if(name.length>0){
            _name=name;
        }
    }

    customer.getDetails=function(){
        return "Customer ID is "+_id+" and Customer name is :"+_name;
    }
    return customer;
}

let customer = makeCustomer();
customer.setId(102);
customer.setName("Jayesh");
console.log(customer);
console.log(customer.getDetails());

