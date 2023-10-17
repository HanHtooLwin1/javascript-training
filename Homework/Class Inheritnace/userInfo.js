class UserInfo {
    userName = "";
    email = "";
    password = "";

    constructor(name, email, password) {
        this.userName = name;
        this.email = email;
        this.password = password;
    }

    get userName() {
        return this.userName;
    }

    set userName(name) {
        this.userName = name;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }
    
    get password() {
        return this.password;
    }

    set password(password) {
        if(password.length < 5) {
            return "Your password is too short!";
        }
        this.password = password;
    }
}

class NewUser extends UserInfo {

}
let newUser = new NewUser("Kyaw Kyaw", "example.@email.com", "a11");
console.log(newUser.password);
