class Bird {
    name = "";
    flyingHeight = "";
    primaryFood = "";

    constructor(name, flyingHeight, primaryFood) {
        this.name = name;
        this.flyingHeight = flyingHeight;
        this.primaryFood = primaryFood;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get flyingHeight() {
        return this.flyingHeight;
    }

    set flyingHeight(height) {
        this.flyingHeight = height;
    }

    get primaryFood() {
        return this.primaryFood;
    }

    set primaryFood(food) {
        this.primaryFood = food;
    }
}

class Eagle extends Bird {

} 

let eagle = new Eagle("Eagle", "10,000 to 15,000 feet above sea level", "fish");
console.log(eagle.primaryFood);