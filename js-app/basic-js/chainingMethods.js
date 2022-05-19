class User {
    constructor(username,email){
        this.username=username;
        this.email=email;
    }

    login(){
        console.log(`${this.username} logged in !!`);
        return this;
    }

    logout(){
        console.log(`${this.username} logged out`);
        return this;
    }
}

const userOne=new User("Manish","maninsh@gmail.com");
const userTwo=new User("Ritesh","ritesh@gmail.com");

console.log(userOne,userTwo);

