// localStorage.setItem("name","Suyash");
// localStorage.setItem("age",34);
// localStorage.setItem("class","BE");
// localStorage.setItem("spec","dotnet");
// localStorage.setItem("name","Aniket");

// const name=localStorage.getItem("name");
// console.log(name);




localStorage.clear();

const players=[
    {name:"Sachin",topscore:207,retired:true},
    {name:"Rohit",topscore:158,retired:false},
    {name:"Virat",topscore:180,retired:false},
    {name:"Dravid",topscore:160,retired:true}
];

//console.log(JSON.stringify(players));

// localStorage.setItem("players",JSON.stringify(players));

// // localStorage.removeItem("name");

// const playersData=JSON.parse(localStorage.getItem("players"));

// console.log(playersData);
const tbody=document.querySelector("tbody");


let html=``;
let count=1;

players.forEach(player=>{
    html+=`<tr>
    <th scope="row">${count++}</th>
    <td>${player.name}</td>
    <td>${player.topscore}</td>
    <td>${player.retired}</td>
  </tr>`
});

tbody.innerHTML+=html;





