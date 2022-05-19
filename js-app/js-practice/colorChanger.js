// <!-- ----------------------------------------------- -->
//     <!-- <button>Blue</button>
//     <button>RED</button>
//     -->

console.log(document);
const buttons=document.querySelectorAll('button');

buttons.forEach((button,id)=>{
    button.addEventListener('click',(e)=>{
        //if(e.target.textContent.includes('Blue')){
        if(id==0){
            document.body.style.backgroundColor = "Blue";
        }
        //if(e.target.textContent.includes('RED')){
        if(id===1){
            document.body.style.backgroundColor = "RED";
        }
        
        
    });
});