const request=new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
    console.log(request,request.readyState);
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');

request.send();

//check console for output and read readystate
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
