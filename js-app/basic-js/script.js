// const value=50.54;

// console.log(typeof value);

// let val='Hello';

// console.log(typeof val);

// let found=10>2;

// console.log(found);

// let email='indiawinsworldcup@gmail.com';

// let result=email.replace('i','V');

// console.log(result);



//template string

// const title="Cooking Indian food";

// const author="Jasmine";

// const likes =120;

// let str=`The blog ${title} by ${author} has ${likes} likes`;

// console.log(str);
//The blog Cooking Indian food by Jasmine has 120 likes

// let html=`
//     <h1> Welcome blog</h1>
//     <h2>Title ${title}</h2>
//     <p>Author ${author}</p>
//     <p>Likes ${likes}</p>
// `;

// console.log(html);


//Arrays

// let players=['Sachin','Virat','Rohit','Mayank'];

// console.log(players.includes('Dinesh'));

// console.log(players.length);

// console.log(players.join('-'));

// console.log(players.concat(['Dinesh','Dhoni']));

// let res=players.push('Pant')

// console.log(players);

//

// let age=null;

// //console.log(age);

// console.log( (age+ 10)+ ` age is ${age}`);

//loose comparison vs strict comparison

// let age=25;

// console.log(age==25);

// console.log(age=='25');


// console.log(age==='25');

//functions

//1. function declaration

// function greet(){
//     console.log("Welcome to Programming hub");
// }

// greet();


//2.Function expression

// const greet= function(){
//     console.log("Welcome to Internet hub");
// };

// greet();

//name,age,college


//Hoisting :Functions in Javascript are hoisted at top of the file,
//but function expressions are not hoisted

// greet();

// function greet(){
//     console.log("Join Programming hub");
// }

// const greet= function(){
//     console.log("Welcome to Internet hub");
// };

// Function arguments- Default Parameter

// const greet=function(name="Harsh",time="Night"){
//     console.log(`Good ${time} ${name}`);
// };

// greet("Jay","Morning");
// greet("Suyash");
// greet();

//Returning value from a function

// const area=function(radius){
//     return 3.14*radius**2;
// };

// const result=area(5);
// console.log(result);

//Arrow function

// const area=(radius)=>{
//     return 3.14*radius**2;
// };


// const area=radius=>{
//     return 3.14*radius**2;
// };

// const area=radius=> 3.14*radius**2;



// console.log(area(10));


// const greet=(name="Harsh",time="Night")=>{
//         console.log(`Good ${time} ${name}`);
//     };

// greet();

// const message=()=>{
//     console.log("Hi to All");
// };

// message(); 


// const bill=(products,tax)=>{
//     let total=0;
//     for(let i=0;i<products.length;i++)
//     {
//         total+=products[i]+products[i]*tax;
//     }
//     return total;
// };

// console.log(bill([10,20,30,40],0.2));

//Method Callback

// let myfunc=callback=>{
//     let value=500;
//     callback(value);
// };


// myfunc(val=>{
//     console.log(val);
// });

//type conversion

//let value='Hello';

// console.log(value,typeof value);

// value=Number(value);

// console.log(value,typeof value);
// let test;

// let val=Boolean(test);

// console.log(val);


//foreach method

let players=['Sachin','Virat','Rohit','Mayank',"Pant"];

// players.forEach(function(player,index){
//    console.log(index+"  :"+player); 
// });

// players.forEach((player,ind)=>{
//     console.log(ind,player);
// });

//Writing callback function externally

// let logPlayer=(player,index)=>{
//     console.log(index,player);
// };

// players.forEach(logPlayer);

let playerList=document.querySelector(".topplayers");
// //console.log(playerList);

// let html=``;
// players.forEach(player=>{
//     html+=`<li>${player}</li>`;
// });

// playerList.innerHTML=html;

// console.log(html);
let sites=[
    ['https://www.google.com','google'],
    ['https://www.w3schools.com','w3school'],
    ['https://www.facebook.com','facebook']
];

let html=``;

sites.forEach((site) => {
    html+=`<a href="${site[0]}">${site[1]}</a> <br>`;
});

playerList.innerHTML=html;













