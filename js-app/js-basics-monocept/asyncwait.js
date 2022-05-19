//async and wait

const demofunc=async()=>{
    const response= await fetch("shikhar.json");
    if(response.status!==200){
        throw new Error("Could not fetch resource");
    }
    const data =await response.json();
    return data;
};

demofunc().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Rejected :",error.message);
});




