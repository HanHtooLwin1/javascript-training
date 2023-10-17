class LandMammal {
    name = "";
    sleepTime = "";
    speed = "";
    
    constructor(name, speed, sleepTime) {
        this.name = name;
        this.speed = speed;
        this.sleepTime = sleepTime;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get speed() {
        return this.speed;
    }

    set speed(speedRate) {
        this.speed = speedRate;
    }

    get sleepTime() {
        return this.sleepTime;
    }

    set sleepTime(time) {
        this.sleepTime = time;
    }
}

class Cheetah extends LandMammal {
    otherName = "";

    constructor(name, speed, sleepTime, otherName) {
        super(name);
        this.otherName = otherName;
    }

    get otherName() {
        return this.otherName;
    }

    set otherName(name) {
        this.otherName = name;
    }
}

let cheetah = new Cheetah("Cheetah", "0 to 72 kilometers per hour", "at night", "the fastest land-mammal");
console.log(cheetah.otherName);