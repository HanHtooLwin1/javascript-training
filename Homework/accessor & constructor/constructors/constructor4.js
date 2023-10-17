function watch(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
}

let myWatch = new watch("Rolex", "Cosmograph Daytona", "$83500", "platinum");
console.log(myWatch.model);