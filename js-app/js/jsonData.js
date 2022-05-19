//Converting json data into real javascript object
//Reading a local json file

//the parameter callback is a method defined inside todos() call
var  todos=(resource,callback)=>{  
    const request=new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        //console.log(request,request.readyState);
        //only print to console if the status code is 4
        if(request.readyState===4 && request.status===200){
            const data=JSON.parse(request.responseText);
            callback(undefined,data);
        }else if(request.readyState===4){
            callback('Could not fetch data',undefined);
        }
    });

    request.open('GET',resource);
    //check if request.readyState =4 if reached if the endoint url is not correct
    //404 status code : resource not found
    //200 status code : resource downloaded successfully
    //read response codes : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    request.send();

 }


//passing a method as a parameter to the todos method
 todos('js//dwayne.json',(err,data)=>{
    console.log(data);
    todos('js//aju.json',(err,data) =>{
        console.log(data)
        todos('js//ram.json',(err,data)=>{
            console.log(data);
        })
    })
 });
