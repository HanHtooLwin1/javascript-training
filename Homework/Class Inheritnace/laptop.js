class Laptop {
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

class JhonLaptop extends Laptop {

}

let Jhon_Laptop = new JhonLaptop("Dell", "21H1", "6 lakhs");
console.log(Jhon_Laptop.price);
