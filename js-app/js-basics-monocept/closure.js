// let name="Shikhar";

// function printName(){
//     console.log(name);
// }
// name="abhishek";
// printName();

// function outerFunction(outerVariable){
//     const outerMore="Hello";
//     return function innerFunction(innervariable){
//         console.log("Outer variable :"+ outerVariable);
//         console.log("Inner variable  :"+innervariable);
//         console.log("Outer function local variable  :"+outerMore);
//     }
// }

const outerFunction=outerVariable=>{
    const outerMore="Hello";
    return innervariable=>{
        console.log("Outer variable :"+ outerVariable);
        console.log("Inner variable  :"+innervariable);
        console.log("Outer function local variable  :"+outerMore);
    }
}

const myFunction=outerFunction("outside");

myFunction("inside");

// console.log(myFunction);