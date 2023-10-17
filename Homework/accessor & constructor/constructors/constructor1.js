function phone(brand, color, price, series) {
    this.brandName = brand;
    this.color = color;
    this.price = price;
    this.series = series;
}

const JohnPhone = new phone("iPhone", "white", "$900", 14);
console.log(JohnPhone.brandName);