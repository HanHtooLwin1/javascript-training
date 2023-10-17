class Reptiles {
    constructor(name) {
        this.name = name;
        this.reproductionMethod = "by laying eggs";
        this.blood = "cold-blooded";
    }

    reproduction() {
        console.log(`${this.name} give birth by ${this.reproductionMethod}.`);
    }

    bloodType() {
        console.log(`${this.name} are ${this.blood} animals.`);
    }
}

let reptiles = new Reptiles("Reptiles");
reptiles.bloodType();

class Seaturtles extends Reptiles {
    swim() {
        console.log(`${this.name} can swim.`);
    }
}

let seaturtles = new Seaturtles("Seaturtles");
seaturtles.swim();