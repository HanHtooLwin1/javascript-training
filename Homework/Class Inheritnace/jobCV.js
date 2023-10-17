class ApplocantForm {
    name = "";
    age = "";
    jobPosition = "";
    expectedSalary = "";

    constructor(name, age, position, amount) {
        this.name = name;
        this.age = age;
        this.jobPosition = position;
        this.expectedSalary = amount;
    }

    get name() {
        return this.brandName;
    }

    set name(name) {
        this.name = name;
    }

    get age() {
        return this.age;
    }

    set age(age) {
        this.age = age;
    }

    get jobPosition() {
        return this.jobPosition;
    }

    set jobPosition(position) {
        this.jobPosition = position;
    }

    get expectedSalary() {
        return this.expectedSalary;
    }

    set expectedSalary(amount) {
        this.expectedSalary = amount;
    }
}

class Applicant1 extends ApplocantForm {

}

let applicant1 = new Applicant1("Jhon", "30", "Manager", "$7,044");
console.log(applicant1.expectedSalary);