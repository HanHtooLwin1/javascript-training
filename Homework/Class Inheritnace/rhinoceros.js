class LandMammal {
    name = "";
    sleepTime = "";
    size = "";

    constructor(name, time, size) {
        this.name = name;
        this.sleepTime = time;
        this.size = size;
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
}

class Rhinoceros extends LandMammal {
    
}


let rhinoceros = new Rhinoceros("Rhinoceros", "at night", "between 6.5 and 13 feet");
console.log(rhinoceros.sleepTime);