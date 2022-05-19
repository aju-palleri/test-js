//varibles in javascript
//lossely typed

// let name="Zawed";

// console.log(name, typeof name);

// name="Aniket";

// console.log(name,typeof name);

// name=100;
// console.log(name,typeof name);


// const name="Shikhar";

// console.log(name);
// //name="Aju;"   TypeError

// console.log(name);

// console.log(val);

// var val='10';

//Datatypes

// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Object

// let val=-1;

// console.log(val,typeof val);

// let firstName='Himanshu';

// console.log(firstName);

let email="indiaismyiscountry@gmail.com";

// //1. Convert to uppercase
// console.log(email.toUpperCase());
// //2. find the index of @
// let index=email.indexOf('@');
// console.log(index);
// //3. find all characters after@
// console.log(email.slice(index+1));
// //4. extract country from email
// index=email.indexOf('country');
// let endIndex=index+"country".length;
// console.log(email.slice(index,endIndex));

// let str="Hello India";
// console.log(str.slice(-5));
// console.log(str.substring(-5));

// let newStr=email.replace('is','IS');//replaces first occurance
// console.log(newStr);

// newStr=email.replaceAll('is','IS');//replaces all occurance
// console.log(newStr);

//Template String

// let title="Indian cooking secrets";
// let author="Ramya";
// let likes=500;

// // let str="Blog on "+title+" by "+author+" has "+likes+" likes";
// // console.log(str);

// let tempStr=`Blog on ${title} by ${author} has ${likes} likes`;
// console.log(tempStr);

// let html=`
//     <h3>Title ${title}</h3>
//     <h5>Author ${author}</h5>
//     <h5>Likes : ${likes}</h5>
// `;

// console.log(html);

//Array
//  let players=[];
//  players.push("Sachin");
//  console.log(players);
// let players=['Sachin','Virat','Rohit','Mayank'];

// //console.log(players);

// //find the length of players
// console.log(players.length);

// //generate a string of all players seperated by - Sachin-Virat...
// let playerString=players.join('-');
// console.log(playerString);

// //add ['Pant','Dinesh'] to player array
// players=players.concat(['Pant','Dinesh']);
// console.log(players);

// //add 'Ishan' to array

// // players.push("Ishan");
// console.log(players);

// console.log(players.pop());
// console.log(players);

//null and undefined

// let age;

// console.log(age);

// console.log(age+10);


// let age=null;

// console.log(age);

// let newString=age+'10';



// console.log(newString);

// let players=['Sachin','Virat','Rohit','Mayank'];

// console.log(players.includes('Virat'));

//loose comparision and strict comparison

// let age='Java';

// console.log(age==40);
// console.log(age=='Java');//loose comparision

// console.log(age==='Java');


//Type Conversion

// let score='100';

// console.log(score,typeof score);

// score=Number(score);

// console.log(score,typeof score);

// let result="hello";

// result=Number(result);
// console.log(result);

// let result=Boolean(-100);
// console.log(result);

//function declaration and Hoisting

// greets();

// function greets(){
//     console.log("Good morning");
// }



//function expression

// var greet = function(){
//     console.log("Good Night");
// };


// greet();

//function with arguments

// const greet=function(name="Akshay",time="Morning"){
//     console.log("Good "+time +" "+name);
// };

// greet("Harshal","Night","abc");
// greet("Shikhar");
// greet();

//returning values from a function

// const add=function(num1,num2){
//     return num1+num2;
// };
// console.log(add(10,20));


//Arrow

// const area=(radius)=>{
//     return 3.1417* radius**2;
// };

// console.log(area(10));



// const area=radius=> 3.1417* radius**2;


// console.log(area(10));

// const add=(num1,num2)=> num1+num2;


// console.log(add(10,20));



// const greet=(name="Akshay",time="Morning")=>{
//     console.log("Good "+time +" "+name);
// };

// greet("Harsh","Night");

// const htag=document.querySelector('body > h5:nth-child(3)');
// console.log(htag);

//Day2

//foreach method and method callback

// const myFunc=(func)=>{
//     let value=80;
//     func(value);   
// };

// myFunc((val)=>{
//     console.log(val);
// });


// let players=['Sachin','Virat','Rohit','Mayank'];

// players.forEach(player=>{
//     console.log(player);
// })

//Object Literals

// let user={
//     name:"Jay",
//     email: "jay@gmail.com",
//     age:30,
//     articles:['Working woth DOM','Using eclipse effectively'],
//     login:function(){
//         console.log("User logged in");
//     },
//     logout:function(){
//         console.log("User logged out");
//     },
//     logArticle:function(){
//         console.log("List of articles");
//         this.articles.forEach(article=>{
//             console.log(article);
//         })
//     }

// };

// console.log(this);
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.articles);

// user.login();
// user.logout();

// console.log(user['articles']);
// user.logArticle();

//Array of Object

// let articles=[
//     {
//         title:'Working woth DOM',
//         likes:100
//     },
//     {
//         title:'Using eclipse effectively',
//         likes:20
//     },
//     {
//         title:'Building dynamic websites',
//         likes:200
//     }
// ];

// articles.forEach(article=>{
//     console.log(article.title+" | Likes :"+article.likes);
// });

// let user={
//     name:"Jay",
//     email: "jay@gmail.com",
//     age:30,
//     articles:[
//         {
//             title:'Working woth DOM',
//             likes:100
//         },
//         {
//             title:'Using eclipse effectively',
//             likes:20
//         },
//         {
//             title:'Building dynamic websites',
//             likes:200
//         }
//     ],
//     login:function(){
//         console.log("User logged in");
//     },
//     logout:function(){
//         console.log("User logged out");
//     },
//     logArticle:function(){
//         console.log("List of articles");
//         this.articles.forEach(article=>{
//             console.log(article);
//         })
//     }

// };

// let value=20.657;

//console.log(Math.);

//Round
//upper bound
//lower bound

//remove decimals
//generate random number (bteween 1-100)

//DOM

//querySelector

// const h3ref=document.querySelectorAll('h3');

// console.log(h3ref);

// h3ref.forEach(heading=>{
//     //console.log(heading.textContent);
//     //heading.textContent+=" more content";
//     heading.innerText+="more content";
// })

// let playerlist=document.querySelector('ul');
// console.log(playerlist);

// let players=['Sachin','Virat','Rohit','Mayank'];

// let html=``;

// players.forEach(player=>{
//     html+=`<li>${player}</li>`;
// });

// playerlist.innerHTML=html;


// google
// facebook
// w3schools
// javatpoint

// let websites=[
//     ["https://www.google.com","Google"],
//     ["https://w3schools.com","w3schools"],
//     ["https://facebook.com","facebook"],
//     ["https://javatpoint.com","javatpoint"]
// ];

// html+=`<a href="${website[0]}">${website[1]}</a>`;

// <div>
    
// </div>

// const para=document.querySelector('body > div:nth-child(1) > p:nth-child(4)');
// // const para=document.querySelector('#thirdp');
// console.log(para.innerText);

// getAttribute and setAttribute

// const link=document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute("href","http://www.facebook.com");

// link.setAttribute("class","error");

// link.setAttribute("style","color:green");

// link.innerText="Facebook";

//Adding and removing classes

// const para=document.querySelector("p");

// console.log(para.classList);

// para.classList.remove("success");

// para.classList.add("error");

// const title=document.querySelector("h1");

// title.addEventListener('click',()=>{
//     title.classList.toggle('error');
// });

// const input = document.querySelector('input');
// const log = document.getElementById('log');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// const article=document.querySelector("article");
// console.log(article.children);

// Array.from(article.children).forEach(child=>{
//     child.classList.add("article-tag");
// })

// const para=document.querySelector("p");
// console.log(para.parentElement.parentElement.parentElement);

// console.log(para.nextElementSibling.nextElementSibling);

// console.log(para.previousElementSibling);

//Day 4

//Array functions
//1.Filter method
// const scores=[10,30,40,20,25,50,35];

// const filteredArray=scores.filter(score=> score >=30);

// // console.log(filteredArray);

// // console.log(scores);

// const users=[
// 	{name:"Jay",premium:true},
// 	{name:"Roy",premium:false},
// 	{name:"Lee",premium:true},
// 	{name:"Jan",premium:false},
// 	{name:"Tim",premium:true}
// ];

// const premiumUsers=users.filter(user=>user.premium);


// console.log(premiumUsers);

//2. map() method

// const prices=[100,300,400,200,250,500,350];

// const salePrice=prices.map(price=>price*0.5);

// console.log(salePrice);
// console.log(prices);

// const products=[
// 	{name:"Good night",price:350},
// 	{name:"Maggi",price:70},
// 	{name:"Rice",price:560},
// 	{name:"Biscuit",price:50},
// 	{name:"Shoe",price:900}
// ];

// const saleProducts=products.map((product)=>{
//     if(product.price>=500){
//         return {name:product.name,price:product.price*(0.7)};
//     }
//     else{
//         return product;
//     }
// });

// console.log(saleProducts);

// const prices=[12,34,23,19,45,65,42];

// const prices=[2,5,50,12,34,23,19,45,65,42];

// prices.sort((a,b)=>{
//     return a-b;
// });

// console.log(prices);

// const products=[ 
// 	{name:"Good night",price:350},
// 	{name:"zaggi",price:70},
// 	{name:"Rice",price:560},
// 	{name:"Biscuit",price:560},
// 	{name:"Shoe",price:900}
// ];

// products.sort((a,b)=>{
//    if(a.name.toLowerCase()<b.name.toLowerCase()){
//        return -1;
//    }
//    else if(a.name.toLowerCase()>b.name.toLowerCase()){
//        return 1;
//    }
//    else{
//        return 0;
//    }
// });

// console.log(products);


// reduce() function

// const scores=[12,34,54,29];

// const result=scores.reduce((accum,score)=>{
//     if(score>=30){
//         accum++;
//     }
//     return accum;
// },0);

// console.log(result);

//Day 5
// Data and Time

//1. Date Constructor

const now=new Date();

// console.log(typeof now);

// console.log("Full Year :" +now.getFullYear());

// console.log("Get Month "+now.getMonth());

// console.log("getDate "+now.getDate());

// console.log("getHours "+now.getHours());

// console.log("getMinutes "+now.getMinutes());

// console.log("getSeconds "+now.getSeconds());

// Todays date : 06-04-2022

// console.log(now.getTime());

// console.log(now);

// console.log(now.toDateString());

// console.log(now.toTimeString());

// console.log(now.toLocaleDateString());

const before= new Date("April 01 2022 7:30:59");

// console.log(before);

// getTime()

// Math.round(time/(1000*60*60*24)


// const clockChange=()=>{

// };


// setInterval(clockChange,1000);

// console.log(dateFns.isToday(now));

// console.log(dateFns.format(now,`dddd Do MMMM YYYY`));

// console.log(dateFns.distanceInWords(before,now,{addSuffix:true}));

console.log(1);
console.log(2);
console.log(3);

setTimeout(()=>{
    console.log('Callback function is called');
},3000);

button.addEventListener('click',e=>{


});

console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);





































































