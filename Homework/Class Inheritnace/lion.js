class LandMammal {
    name = "";
    size = "";
    otherName = "";

    constructor(name, size, otherName) {
        this.name = name;
        this.size = size;
        this.otherName = otherName;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
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

class Lion extends LandMammal {
    
}


let lion = new Lion("Lion", "between 5.6 and 8.3 feet", "the king of jungle");
console.log(lion.name);