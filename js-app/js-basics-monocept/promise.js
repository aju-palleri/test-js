const doSomething=()=>{
    return new Promise((resolve,reject)=>{
        //write the network code
        //resolve("data received");
        reject("data could not be fetched");
    });
};

// doSomething().then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err);
// });

doSomething().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})