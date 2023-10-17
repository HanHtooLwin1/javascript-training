class Bike {
    brandName = "";
    model = "";
    price = "";

    constructor(name, model, amount) {
        this.brandName = name;
        this.model = model;
        this.price = amount;
    }

    get brandName() {
        return this.brandName;
    }

    set brandName(name) {
        this.brandName = name;
    }

    get model() {
        return this.model;
    }

    set model(model) {
        this.model = model;
    }

    get price() {
        return this.price;
    }

    set price(amount) {
        this.price = amount;
    }
}

class NewArrivedBike extends Bike {

}

let newArrivedBike = new NewArrivedBike("Yamaha", "R7", "200 lakhs");
console.log(newArrivedBike.brandName);
