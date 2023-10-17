class Temperature {
    #degree = 0;
    _unit = "";

    constructor(degree, unit) {
        this.#degree = degree;
        this._unit = unit;
    }

    get degree() {
        return this.#degree;
    }

    set degree(degree) {
        this.#degree = degree;
    }

    get unit() {
        return this._unit;
    }

    set unit(value) {
        this._unit = value;
    }
}

class Celsius extends Temperature {
    print() {
        console.log(this.degree + this._unit);
    }
}

let celsius = new Celsius(30, "C");
celsius.print();
// let temperature = new Temperature(40, "C");
// console.log(temperature.unit);