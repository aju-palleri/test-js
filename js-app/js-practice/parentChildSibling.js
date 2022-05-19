//Parent children and sibling
// <!-- Parent Child and Sibling -->
// <article>
//     <h2>Atricle Title Here..</h2>
//     <p>Statement 1</p>
//     <p>Statement 2</p>
//     <p>Statement 3</p>
//     <p>Statement 4</p>
//     <div>Article by some anonymous author</div>
// </article>

const article=document.querySelector('article');

console.log(article.children);

Array.from(article.children).forEach(child=>{
    //console.log(child.tagName);
   if(child.tagName=='P'){
       child.classList.add("error");
   }
   else
   {
       child.classList.add("success");
   }
});

//Getting the parent element
const para=document.querySelector('P');

console.log(para.parentElement);
console.log(para.parentElement.parentElement);
console.log(para.parentElement.children);
console.log(para.nextElementSibling);
console.log(para.previousElementSibling)

