class Shirt {
    brandName = "";
    size = "";
    price = "";

    constructor(name, size, amount) {
        this.brandName = name;
        this.size = size;
        this.price = amount;
    }

    get brandName() {
        return this.brandName;
    }

    set brandName(name) {
        this.brandName = name;
    }

    get size() {
        return this.size;
    }

    set size(size) {
        this.size = size;
    }

    get price() {
        return this.price;
    }

    set price(amount) {
        this.price = amount;
    }
}

class MyShirt extends Shirt {

}

let myShirt = new MyShirt("Escort", "Medium", "10000 mmk");
console.log(myShirt.brandName);
