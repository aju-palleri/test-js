//storing data in local storage

// localStorage.setItem("name","Vineet");
// localStorage.setItem("name","Abhishek");
// localStorage.setItem("age",15);
// localStorage.setItem("isAdult",false);
// console.log(localStorage.name);

// localStorage.removeItem("name");
// console.log(localStorage.name);

// localStorage.clear();
// localStorage.name="Vinesh";

//data is always stored as String in local storage

const players=[
    {name:"Sachin",topScore:200},
    {name:"Virat",topScore:170},
    {name:"Rohit",topScore:137},
    {name:"Rishabh",topScore:120}
];

localStorage.setItem("players",JSON.stringify(players));

const data=localStorage.getItem("players");

const playersData=JSON.parse(data);
 console.log(playersData);