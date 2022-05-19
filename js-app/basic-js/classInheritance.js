class User {
    constructor(username,email){
        this.username=username;
        this.email=email;
    }

    login(){
        console.log(`${this.username} logged in !!`);
    }

    logout(){
        console.log(`${this.username} logged out`);
    }
}

class Admin extends User{
    deleteUser(user){
        users=users.filter(u=>{
            return u.username!==user.username;
        });
    }
}

const userOne=new User("Manish","maninsh@gmail.com");
const userTwo=new User("ritesh","ritesh@gmail.com");
const userThree=new Admin("Divesh","divesh@gmail.com");

let users=[userOne,userTwo,userThree];

console.log(users);
userThree.deleteUser(userTwo);

console.log(users);
// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);