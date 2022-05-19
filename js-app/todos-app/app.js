const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');
var key=1;

const generateTemplate= (key,todo)=>{
    const html=`
    <li id=${key} class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
 
    list.innerHTML+=html;

};

function myFunction() {
        for (var key in localStorage){
        if(localStorage.getItem(key)!=null){
            generateTemplate(key,localStorage.getItem(key));
        }
     }
  }

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    //console.log(todo);
    if(todo.length>0)
        generateTemplate(key,todo);
        localStorage.setItem(key++, todo);
    addForm.reset();
});

//delete item

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        localStorage.removeItem(e.target.parentElement.id);
        e.target.parentElement.remove();
        
    }
});

//search

const filterTodos=(term) =>{
    Array.from(list.children)
        .filter((todo)=>!todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo)=>todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=>todo.classList.remove('filtered'));
};

//keyup event

search.addEventListener('keyup',()=>{
    const term=search.value.toLowerCase().trim();
    filterTodos(term);
});

