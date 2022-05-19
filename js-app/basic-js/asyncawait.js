//await is used to chain promises together

const getTodos=async ()=>{
    const response1 =await fetch("todos/dinesh.json");
    if(response1.status!==200){
        throw new Error("Could not fetch data");
    }
    const data1 = await response1.json();
     return data1;
};

getTodos().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("asdsa",error);
});









// console.log(data1);

    // const response2 =await fetch("todos/suyash.json");
    // const data2 = await response2.json();
    // console.log(data2)

    // const response3 =await fetch("todos/debolina.json");
    // const data3 = await response3.json();