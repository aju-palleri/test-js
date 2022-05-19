class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
function printName(emp){
    console.log(`Employee name is ${emp.name}`);
}

function printAge(emp){
    console.log(`Employee age is ${emp.age}`);
}

export default Employee;

export {printName, printAge};