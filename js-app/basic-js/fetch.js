fetch("todos/dinesh.json").then((response)=>{
    //  console.log("resolved",response);
    return response.json();
    // console.log(data);
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("rejected",error);
})