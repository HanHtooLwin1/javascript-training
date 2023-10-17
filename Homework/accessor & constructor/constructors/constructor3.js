function car(brand, color, price, type) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.type = type;
}

const dreamCar = new car("Bugatti Chiron", "black", "$3000000", "sport");
console.log(dreamCar.brand);