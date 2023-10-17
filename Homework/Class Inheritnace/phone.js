class Phone {
    brandName = "";
    model = "";
    warranty = "";
    price = "";

    constructor(name, model, duration, amount) {
        this.brandName = name;
        this.model = model;
        this.warranty = duration;
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

    get warranty() {
        return this.warranty;
    }

    set warranty(duration) {
        this.warranty = duration;
    }

    get price() {
        return this.price;
    }

    set price(amount) {
        this.price = amount;
    }
}

class MgMgPhone extends Phone {

}

let MgMg_Phone = new MgMgPhone("Iphone", "14", "1 year", "50 lakhs");
console.log(MgMg_Phone.brandName);
