var  todos=(resource)=>{  
    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        if(request.readyState===4 && request.status===200){
            const data=JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState===4){
            reject('Could not fetch data');
        }
    });

    request.open('GET',resource);
    request.send();
    });

 }

 todos('js/aju.json').then((data)=>{
    console.log(data);
    return todos('js/dwayne.json');
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
});


//  todos('js/aju.json').then((data)=>{
//      console.log(data);
//      todos('js/dwayne.json').then((data)=>{
//          console.log(data);
//      }).catch((err)=>{
//          console.log(err);
//      })
//  }).catch((err)=>{
//      console.log(err);
//  });

//passing a method as a parameter to the todos method
//  todos('js//dwayne.json',(err,data)=>{
//     console.log(data);
//     todos('js//aju.json',(err,data) =>{
//         console.log(data)
//         todos('js//ram.json',(err,data)=>{
//             console.log(data);
//         })
//     })
//  });
