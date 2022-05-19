// <!-- <h1>Adding and removing classes</h1>
//     <p class="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis voluptatem quos commodi distinctio enim.</p> -->

const para=document.querySelector('p');

console.log(para.classList);

para.classList.remove("error");

para.classList.add("error");

para.classList.remove("error");

para.classList.add("success");