// <!-- challenge -->
//     <!-- ----------------------------------------------- -->
//     <!-- <h1>This will toggle</h1>
//     <p>lorem ipsum error</p>
//     <p>lorem ipsum success</p>
//     <p>error lorem ipsim</p>
//     <p>success lorem ipsum</p>
//     <p>lorem error ipsum</p>
//     <p>lorem ipsum lorem</p> -->
//     <!-- ----------------------------------------------- -->

const paras=document.querySelectorAll('p');
const title=document.querySelector('h1');

paras.forEach(para=>{
    if(para.textContent.includes('error')){
        para.classList.add("error");
    }
    if(para.textContent.includes('success')){
        para.classList.add("success");
    }
});

title.addEventListener('click',()=>{
    title.classList.toggle('error')
});