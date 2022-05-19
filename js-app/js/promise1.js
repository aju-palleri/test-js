
const getSomething=()=>{
    return new Promise((resolve,reject)=>{
        resolve('Data resolved!!!');
        //reject('Error occured, Could not load data');
    });
}

//Method 1: first argument for resolve and second reject

// getSomething().then((data)=>{
//     console.log("Resolved :"+data);
// },(err)=>{
//     console.log("Error :"+err);
// });


//method 2 : using then and catch
getSomething().then((data)=>{
    console.log("Resolved :"+data);
}).catch((err)=>{
    console.log(err);
});