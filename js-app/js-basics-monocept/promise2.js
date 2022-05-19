const todos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status === 200) {
                //console.log(request,request.readyState);
                const data = JSON.parse(request.responseText);//consverting JSON data to java script object
                resolve( data);
            }
            else if (request.readyState === 4) {
                //console.log("Could not fetch data");
                reject("Could not fetch data");
            }
        });

        //request.open("GET","https://jsonplaceholder.typicode.com/todos/");
        request.open("GET", resource);
        request.send();
    });
};


todos('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students').then((data) => {
    console.log("Shikhar data");
    console.log(data);
    //return todos("abhishek.json");
})
// .then((data)=>{
//     console.log("Abhis data");
//     console.log(data);
//     return todos("rohan.json");
// }).then((data)=>{
//     console.log("Rohans data");
//     console.log(data);
// })
.catch((err) => {
    console.log(err);
})