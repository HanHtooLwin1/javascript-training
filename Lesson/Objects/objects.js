//Getter
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    get getFirstName() {
        return this.firstName;
    },
    set setFirstName(value) {
        this.firstName = value;
    }
};

person.setFirstName = "Matt";

console.log(person.getFirstName);



