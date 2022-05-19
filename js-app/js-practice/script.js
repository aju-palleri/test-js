const ulref=document.querySelector("ul");

// Array.from(ulref.children).forEach(child)

ulref.addEventListener('click',(e)=>{
//    if(e.target=="LI")
    e.target.remove();
})

const btnref=document.querySelector("button");



btnref.addEventListener('click',()=>{
    let html=``;
    html=`<li>New Player</li>`;
    html=html+ulref.innerHTML;
    ulref.innerHTML=html;
});