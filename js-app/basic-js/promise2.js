const getTodos = (resource) => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
     
      if (request.readyState === 4 && request.status === 200) {
       
        const data = JSON.parse(request.responseText);
        //callback(undefined, data);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("Could not fetch data");
        // callback("Could not fetch data", undefined);
      }
    });
    request.open("GET", resource);
    request.send();

  });
};

getTodos("todos/suyash.json")
  .then((data) => {
    console.log("Suyash Resolved ", data);
    return getTodos("todos/dinesh.json");
  }).then((data)=>{
    console.log("Dinesh Resolved ", data);
    return getTodos("todos/debolina.json");
  }).then((data)=>{
    console.log("Debolina Resolved ", data);
  }).catch((data) => {
    console.log("Rejected ", data);
  });
