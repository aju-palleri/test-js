    
const todos=(callback)=>{
    const request =new XMLHttpRequest();

    request.addEventListener('readystatechange',()=>{
        if(request.readyState==4 && request.status===200){
            //console.log(request,request.readyState);
            const data=JSON.parse(request.responseText);//consverting JSON data to java script object
            callback(undefined,data);
        }
        else if(request.readyState===4){
            //console.log("Could not fetch data");
            callback("Could not fetch data",undefined);
        }
    });

   //request.open("GET","https://jsonplaceholder.typicode.com/todos/");
    request.open("GET","shikhar.json");
    request.send();
};


console.log(1);
console.log(2);
todos((err,data)=>{
    console.log("Callback is fired");
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(3);
console.log(4);

