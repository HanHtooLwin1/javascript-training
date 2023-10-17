const phone = {
    brandName: "iPhone",
    series: 15,
    price: "$1000",
    color: "white",
    get getPrice() {
        return this.price;
    },
    set setPrice(value) {
        this.price = value;
    }
}
phone.setPrice = "$999";
console.log(phone.price);