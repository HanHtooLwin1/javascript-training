class Amphibian {
    constructor(name) {
        this.place = "both in water and on land";
        this.blood = "cold-blooded";
        this.name = name;
    }

    livingArea() {
        console.log(`${this.name} can live ${this.place}.`);
    }

    bloodType() {
        console.log(`${this.name} are ${this.blood} animals.`);
    }
}

let amphibian = new Amphibian("Amphibians");
amphibian.livingArea();

class Frog extends Amphibian {
    jump(high) {
        this.high = high;
        console.log(`${this.name} can jump ${this.high} meters.`)
    }
}

let frog = new Frog("Frog");
frog.bloodType();
frog.jump();