//Day2

//Object Literal

// let user={
//     name:'Ravi',
//     age:30,
//     email:'ravi@gmail.com',
//     article:['Indian economy','Human rights'],
// //adding method to the object literal
//     // login:function(){
//     //     console.log("User logged in"+ user.article);
//     // },

//     // logout:function(){
//     //     console.log("User logged out");
//     // },

//     // logArticles: function(){
//     //     console.log(this);
//     // }
//     login(){
//         console.log("User logged in");
//     },

//     logout(){
//         console.log("User logged out");
//     },

//     logArticles(){
//         console.log("List of articles are :");
//         this.article.forEach((article)=>{
//             console.log(article);
//         });
//     }
//     // console.log(this);
// };

// //console.log(this);

// // console.log(user);
// // console.log(user.name);
// // console.log(typeof user.email);

// // console.log(user['name']);
// // console.log(user['email']);
// // console.log(user.article);

// user.login();
// user.logout();
// user.logArticles();

// let user={
//     name:'Ravi',
//     age:30,
//     email:'ravi@gmail.com',
//     article:[{
//             chapters:['learnig dotnet the easyway','how not to code'],
//             likes:50
//         },
//         {
//             chapters:['TDD','naming conventions in dotnet'],
//             likes:100
//         }],

//     login(){
//         console.log("User logged in");
//     },

//     logout(){
//         console.log("User logged out");
//     },

//     logArticles(){
//         console.log("List of articles are :");
//         this.article.forEach((article)=>{
//             console.log(`Author name ${this.name}`);
//             console.log(`Author articles `);
//             article.chapters.forEach(chapter=>{
//                 console.log(chapter);
//             });
//             //console.log(article.chapters);
//         console.log(this.email);
//         });
//     }
// };


// // let articles=[
// //     {
// //         name:"Suyash",
// //         chapters:['learnig dotnet the easyway','how not to code'],
// //         likes:50
// //     },
// //     {
// //         name:"Dinesh",
// //         chapters:['TDD','naming conventions in dotnet'],
// //         likes:100
// //     }
// // ];


// user.logArticles();

// const para=document.querySelectorAll('.second');

// console.log(para);

//const para=document.querySelector("#third");
// OR
//const para=document.getElementById("third");


// const seconds=document.querySelectorAll(".second");  //NodeCollection
//OR
// const seconds=document.getElementsByClassName("second");//HTMLCollection

// Array.from(seconds).forEach((second)=>{
//     console.log(second.textContent);
// });

// console.log(seconds);

//getElementsByTagName()

//const paras=document.querySelectorAll("p");
//OR
// const paras=document.getElementsByTagName("p");

// console.log(paras);

// Array.from(paras).forEach((para)=>{
//     console.log(para.innerText);
// });
/* <div>
<p>Hello World</p>
<p class="second">Welcome to Programming</p>
<p id="third">Javascript is fun</p>
</div>
<div class="second">
Inside the div tag
</div> */

// 1. print the inner text of p tag with class="third"
// 2. print the innerText of all tags that have class as "second"
// 3. print the innerText of all p tags in the document

// const div=document.querySelector(".content");
// // console.log(div.innerHTML);
// div.innerHTML=`<h1>This is an header</h1>`;

// const players=['Sachin','Sehwag','Virat','Pant'];

// const list=document.querySelector(".list");

// let html=``;
// players.forEach((player)=>{
//     html+=`<li>${player}</li>`;
// });

// list.innerHTML=html;

// getting and setting attributes

const link = document.querySelector("a");

// console.log(link.getAttribute("href"));

// link.setAttribute("href","http://www.w3schools.com");

// link.setAttribute("style","color:green");

// link.textContent="Link to W3school.com";

// link.classList.add("error");

// console.log(link.classList);

// link.classList.remove("link2");

// const para=document.querySelectorAll("p");

// const header=document.querySelector("h1");

// para.forEach((para)=>{
//     if(para.innerText.includes("error")){
//         para.classList.add("error");
//     }
//     if(para.innerText.includes("success")){
//         para.classList.add("success");
//     }
// });

// header.addEventListener('click',(e)=>{
//     header.classList.toggle("error");
// });

// const input=document.querySelector("input");
// const para=document.querySelector("p");

// // button.addEventListener('click',e=>{
// //     para.innerText=input.value;
// //     input.value="";
// // });

// const pattern=/^[a-zA-Z0-9]+$/;     

// input.addEventListener('keyup',e=>{
//     if(pattern.match(input.value)){
//         para.innerText=input.value;
//     }
// // });

// const buttons=document.querySelectorAll("button");
// //const button2=document.querySelector("#btn2");


// buttons.forEach(button=>{
//     button.addEventListener('click',e=>{
//         console.log(e.target);
//         if(button.getAttribute("id")=="btn1"){
//             document.body.style.backgroundColor = "red";
//         }
//         if(button.getAttribute("id")=="btn2"){
//             document.body.style.backgroundColor = "blue";
//         }
//     })
// });


// para.classList.remove("error");

// para.classList.add("success");

//Array methods
//1. filter
// const scores=[100,20,15,40,28,60,90];

// for(let i=0;i<scores.length;i++)
// {
//     console.log(scores[i]);
// }



// scores.forEach((score)=>{
//     console.log(score);
// });


// const topScores=scores.filter((score)=>{
//     return score>=30;
// });

// // const topScores=scores.filter(score=>score>=30);

// console.log(topScores);


// const users=[
//     {name:"Jayesh",premium:true},
//     {name:"Mahesh",premium:false},
//     {name:"Vinesh",premium:true},
//     {name:"Suresh",premium:false},
//     {name:"Ramesh",premium:false},
//     {name:"Divesh",premium:true}
// ];

// const premiumUsers=users.filter(user=>user.premium);
// console.log(premiumUsers);

// premiumUsers.forEach(user=>{
//     console.log(user.name);
// });

//2. map() method

// const prices=[200,210,405,170,280,360,590];

// // let saleprices=[];

// // prices.forEach((price)=>{
// //     saleprices.push(price/2);
// // });

// // console.log(saleprices);

// const salePrices=prices.map(price=>price*0.5);

// console.log(salePrices);


// const products=[
//     {name:"T-shirt",price:400},
//     {name:"Shirt",price:2200},
//     {name:"Jeans",price:1700},
//     {name:"Trouser",price:2700},
//     {name:"Blazer",price:5000}
// ];

// const saleProducts=products.map((product)=>{
//     if(product.price>=2000){
//         return {name:product.name,price:product.price*0.7};
//     }
//     else{
//         return product;
//     }
// });
// console.log(saleProducts);
// console.log(products);


//3. reduce() method
// const scores=[100,20,15,40,28,60,90,45,23,35,45,56];

// const bestScoresCount= scores.reduce((acc,score)=>{
//     if(score>30){
//         acc++;
//     }
//     return acc;
// },0);


// console.log(bestScoresCount);

// const players=[
//     {name:"Jayesh",score:30},
//     {name:"Mahesh",score:40},
//     {name:"Jayesh",score:50},
//     {name:"Mahesh",score:75},
//     {name:"Jayesh",score:60},
//     {name:"Jayesh",score:90}
// ];

// const totalScore=players.reduce((total,player)=>{
//     if(player.name==="Jayesh"){
//         total+=player.score;
//     }
//     return total;
// },0);

// console.log(totalScore);

// const scores=[100,5,4,7,20,15,40,28,60,90,45,23,35,45,56];

// scores.sort((a,b)=>{
//     return b-a;
// });

// console.log(scores);

// const players=[
//     {name:"Jayesh",score:30},
//     {name:"Mahesh",score:40},
//     {name:"Ramesh",score:50},
//     {name:"Suresh",score:75},
//     {name:"Vinesh",score:60},
//     {name:"Divesh",score:90}
// ];

// players.sort((a,b)=>{
//     return b.name.localeCompare(a.name);
// });

// console.log(players);



// const button = document.querySelector("button");
// const ul = document.querySelector("ul");

// // console.log(lists);
// let lists = document.querySelectorAll("li");


// ul.addEventListener('click', e => {
//     if(e.target.tagName=="LI"){
//         console.log("Hello");
//         e.target.remove();
//     }
// });


// let html = ``;
// button.addEventListener('click', e => {
//     e.preventDefault();
//     html = `<li>Some New Player</li>`;
//     ul.innerHTML += html;
// });

// console.log(html);
// // console.log(ul.innerHTML);
// // ul.innerHTML+=html;

// // Day 5

// const now =new Date();

// console.log(now);

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDay());

// console.log(now.getDate());


// Todays date is 07/04/2022

// console.log(now.toDateString());

// console.log(now.toTimeString());

// console.log(now.toLocaleDateString());

// // console.log(now.getTime());

// const before=new Date("February 27 2022 12:50:50");

// console.log(before.getTime());

// //you logged in 33 days ago

// //hint: use timestamp

// const diff=now.getTime()-before.getTime();

// console.log(diff);

// const days=Math.round(diff/(1000*60*60*24));
// console.log(days);


// const timestamp=new Date(1645946450000);

// console.log(timestamp.toDateString());



//create a digital clock

// 12 : 34: 50

// const hrs=document.querySelector("#hrs");
// const mins=document.querySelector("#mins");
// const secs=document.querySelector("#secs");

// const click=()=>{
//     const now=new Date();
//     hrs.innerHTML=now.getHours();
//     mins.innerHTML=now.getMinutes();
//     secs.innerHTML=now.getSeconds();

// };

// const correctHours=(date)=>{
//     let hr=date.getHours;
//     if(date.getHours>12){
//         hr=hr-12
//     }
//     if(hr<10){
//         hr="0"+hr;
//     }
//     return hr;
// }

// setInterval(click,1000);


// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// console.log(moment("20120620", "YYYYMMDD").fromNow());

const now=new Date();

const before=new Date("February 27 2022 12:50:50");

// console.log(dateFns.isToday(before));

// console.log(dateFns.format(now,'dddd Do MMMM YYYY'));

console.log(dateFns.distanceInWords(before,now,{addSuffix:true}));














