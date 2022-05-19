const addForm=document.querySelector('.add');
let m=moment().format("DD MM YYYY hh:mm:ss");
let lastSearched=moment().format("DD MM YYYY hh:mm:ss");

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const inputNumber=addForm.add.value.trim();
    //console.log(localStorage.length);
    for(var key in localStorage){
        if(key===inputNumber){
            lastSearched=localStorage.getItem(key).slice(-19);
        }
    }

    //console.log(inputNumber);
    getNumberMessage(inputNumber)
     .then(data=>{
            //console.log(data);
            document.getElementById('num').innerHTML=inputNumber;
            document.getElementById('val').innerHTML=data;
            document.getElementById('searchDate').innerHTML=`First Searched on :${lastSearched}`;
            localStorage.setItem(inputNumber,[data,m]);
        });
    addForm.reset();
});


const getNumberMessage=async (number)=>{
    const uri=`http://numbersapi.com/${number}`;
    const response= await fetch(uri); 
    const data=await response.text();

    return data;
};

