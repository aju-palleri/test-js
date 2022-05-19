// <!-- <h1>Hello World!!!</h1>
//     <a href="https://www.google.com">Google</a> -->
//     <!-- ----------------------------------------------- -->



const link =document.querySelector("a");


console.log(link.getAttribute("href"));


link.setAttribute("href","http://www.facebook.com")

console.log(link.getAttribute("href"));

link.setAttribute("Style","background-color:green; color:white; margin:20px; padding:10px");