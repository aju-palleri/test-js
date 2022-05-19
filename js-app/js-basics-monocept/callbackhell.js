    
const todos=(resource,callback)=>{
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
    request.open("GET",resource);
    request.send();
};



todos("shikhar.json",(err,data)=>{
    console.log(data);
    todos("abhishek.json",(err,data)=>{
        console.log(data);
        todos("rohan.json",(err,data)=>{
            console.log(data);
        })
    })
});


