class StudentDetail {
    name = "";
    age = "";
    height = "";
    birthday = "";
    IQ = "";

    constructor(name, age, height, birthday, IQ) {
        this.name = name;
        this.age = age,
        this.height = height;
        this.birthday = birthday;
        this.IQ = IQ;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get age() {
        return this.age;
    }

    set age(number) {
        this.age = number;
    }

    get height() {
        return this.height;
    }

    set height(number) {
        this.height = number;
    }

    get birthday() {
        return this.birthday;
    }

    set birthday(birthday) {
        this.birthday = birthday;
    }

    get IQ() {
        return this.IQ;
    }

    set IQ(number) {
        this.IQ = number;
    }
}

let studentdetail = new StudentDetail("Mg Mg", 18, "169 cm", "12.3.2006", 90);
console.log(studentdetail.name);