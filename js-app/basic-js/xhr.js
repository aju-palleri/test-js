const getTodos = (resource,callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //console.log(request,request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //console.log(request, request.readyState);
      //console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState == 4) {
      //console.log("Could not fetch the data");
      callback("Could not fetch data", undefined);
    }
  });
  //sets up the request
  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET",resource);

  //sends the request
  request.send();
};

//callback of Hell
getTodos("todos/suyash.json",(err, data) => {
    console.log(data);
    getTodos("todos/dinesh.json",(err,data)=>{
        console.log(data);
        getTodos("todos/debolina.json",(err,data)=>{
            console.log(data);
        });
    });
});
