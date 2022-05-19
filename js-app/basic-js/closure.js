function outerFunction(outerVariable){
    const customerCount=100;
    return function innerFunction(innerVariable){
        console.log("Outer Variable :"+outerVariable);
        console.log("Inner Variable :"+innerVariable);
        console.log("Customer count :"+customerCount);
    }
}


const myFunction=outerFunction("outside");

console.log(myFunction);


myFunction("inside");



