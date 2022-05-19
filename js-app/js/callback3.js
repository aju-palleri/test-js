//the parameter callback is a method defined inside todos() call
var  todos=(callback)=>{  
    const request=new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        //console.log(request,request.readyState);
        //only print to console if the status code is 4
        if(request.readyState===4 && request.status===200){
            callback(undefined,request.responseText);
        }else if(request.readyState===4){
            callback('Could not fetch data',undefined);
        }
    });

    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    //check if request.readyState =4 if reached if the endoint url is not correct
    //404 status code : resource not found
    //200 status code : resource downloaded successfully
    //read response codes : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    request.send();

 }

 console.log('1');
 console.log('2');
 console.log('3');

//passing a method as a parameter to the todos method
 todos((err,data)=>{
    console.log("Callback fired !!!");
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
 });

 console.log('4');
 console.log('5');
 console.log('6');
