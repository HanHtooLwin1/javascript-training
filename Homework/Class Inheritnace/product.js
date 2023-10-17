class ProductDetail {
    productName = "";
    productCode = "";
    price = "";

    constructor(name, code, amount) {
        this.productName = name;
        this.productCode = code;
        this.price = amount;
    }

    get productName() {
        return this.productName;
    }

    set productName(name) {
        this.productName = name;
    }

    get productCode() {
        return this.productCode;
    }

    set productCode(code) {
        this.productCode = code;
    }

    get price() {
        return this.productName;
    }

    set price(amount) {
        this.price = amount;
    }
}

class Shampoo extends ProductDetail {

}

let shampoo = new Shampoo("Clear", "H-3305", "10000 mmk");
console.log(shampoo.price);