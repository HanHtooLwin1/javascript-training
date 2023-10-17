class LandMammal {
    name = "";
    sleepTime = "";
    size = "";
    otherName = "";

    constructor(name, time, size, otherName) {
        this.name = name;
        this.sleepTime = time;
        this.size = size;
        this.otherName = otherName;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get sleepTime() {
        return this.sleepTime;
    }

    set sleepTime(time) {
        this.sleepTime = time;
    }

    get size() {
        return this.size;
    }

    set size(number) {
        this.size = number;
    }

    get otherName() {
        return this.otherName;
    }

    set otherName(name) {
        this.otherName = name;
    }
}

class Elephant extends LandMammal {
    
}


let elephant = new Elephant("Elephant", "at night", "8.2 to 13 feet", "the largest living land animal");
console.log(elephant.size);