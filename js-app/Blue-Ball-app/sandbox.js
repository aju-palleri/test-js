const min=1;
const max=50;
let found=false;
let countAttempts=0;
const randNumber=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randNumber);

const checkNumber = function(id){
    
    //const bid=document.getElementById("1");
    //console.log(id);
    if(id<randNumber && found==false){
        document.getElementById(""+id).style.backgroundColor="orange";
    }
    if(id>randNumber && found==false){
        document.getElementById(""+id).style.backgroundColor="brown";
    }

    if(id==randNumber && found==false){
        document.getElementById(""+id).style.backgroundColor="green";
        found=true;
        document.getElementById("score").innerHTML="YOU WON...Total Attempts : "+ ++countAttempts;
    }
    if(found==false)
    {
        document.getElementById("score").innerHTML="Total Attempts : "+ ++countAttempts;
    }
};
