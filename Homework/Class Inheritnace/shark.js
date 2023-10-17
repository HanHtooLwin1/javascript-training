class Fish {
    name = "";
    size = "";
    mainFood = "";
    habitat = "";

    constructor(name, number, food, place) {
        this.name = name;
        this.size = number;
        this.mainFood = food;
        this.habitat = place;
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

    get mainFood() {
        return this.mainFood;
    }

    set mainFood(food) {
        this.mainFood = food;
    }

    get habitat() {
        return this.habitat;
    }

    set habitat(place) {
        this.habitat = place;
    }
}

class Shark extends Fish {
    
}


let shark = new Shark("Shark", "5-7 feet", "small fish and invertebrates", "Ocean");
console.log(shark.name);