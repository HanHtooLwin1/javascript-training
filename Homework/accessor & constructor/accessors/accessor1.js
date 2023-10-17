const cat = {
    name: "kitty",
    age: 1,
    color: "black",
    get getColor() {
        return this.color;
    },
    set setColor(value) {
        this.color = value;
    }
};

cat.setColor = "white";
console.log(cat.getColor);