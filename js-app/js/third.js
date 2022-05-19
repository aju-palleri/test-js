const request=new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
    //console.log(request,request.readyState);
    //only print to console if the status code is 4
    if(request.readyState===4 && request.status===200){
        console.log(request,request.responseText);
     }//else{
    //     console.log("Could not fetch the data");
    // }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//check if request.readyState =4 if reached if the endoint url is not correct
//404 status code : resource not found
//200 status code : resource downloaded successfully
//read response codes : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

request.send();