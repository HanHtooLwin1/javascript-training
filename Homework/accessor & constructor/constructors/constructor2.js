function laptop(diviceName, color, price, version) {
    this.diviceName = diviceName;
    this.color = color;
    this.price = price;
    this.version = version;
}

const myLaptop = new laptop("DESKTOP-MFEA82O", "black", "$150", "21H1");
console.log(myLaptop.color);