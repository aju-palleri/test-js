const tbl=document.querySelector('.studentTable');
let studentCount=0;


const getStudentJson=async ()=>{
    const uri='http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students';
    const response= await fetch(uri); 

    const data=await response.json();
    //console.log(data);  
    return data;
};

getStudentJson().then((data)=>{
    let students = data;
    students.map(function(student) {     
        let rollno=student.rollNo;
        let name=student.name;
        let email=student.email;
        let age=student.age;
        if(name!=null && name!=""){
            studentCount++;
            generateTemplate(studentCount,rollno,name,age,email);   
        }
    });
    document.getElementById('count').innerHTML=`Total records found ${studentCount}`;
});

const generateTemplate= (srno,rollno,name,age,email)=>{
    //studentCount++;
    //console.log(studentCount);
    const html=`
    <tr>
        <th>${srno}</th>
        <th>${rollno}</th>
        <th>${name}</th>
        <th>${age}</th>
        <th>${email}</th>
    </tr>
    `;
    tbl.innerHTML+=html;
};


// const url = 'http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students'';

// let data = {
//   name: 'Sammy'
// }

// let fetchData = {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: new Headers({
//     'Content-Type': 'application/json; charset=UTF-8'
//   })
// }

// fetch(url, fetchData)
//   .then(function() {
//     // Handle response you get from the API
//   });

function addRecord(){
    const rollNo=document.querySelector('#inputRollno').value.toLowerCase().trim();
    const name=document.querySelector('#inputName').value.toLowerCase().trim();
    const age=document.querySelector('#inputAge').value.toLowerCase().trim();
    const mail=document.querySelector('#inputEmail').value.toLowerCase().trim();
    
    //console.log(rollNo+" "+name+" "+age+" "+mail);
    const url='http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students';
    let data={
        "rollNo": rollNo,
        "name": name,
        "age": age,
        "email": mail,
        "date": "31/12/2021",
        "isMale": true
    }
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      }
      
      fetch(url, fetchData)
        .then(function(res) {
          console.log(res);
        });

    // console.log(data);
    // return false;
}

