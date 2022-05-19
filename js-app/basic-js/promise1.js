const doSomething=()=>{
    return new Promise((resolve,reject)=>{
        //code for nw
        resolve("some data");
        //reject("some data")
    });
};

doSomething().then((data)=>{
    console.log("Resolved ",data);
}).catch((data)=>{
    console.log("Rejected ",data);
})