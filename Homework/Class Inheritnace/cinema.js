class Cinema {
    movieName = "";
    showTime = "";
    soldOutTicket = "";
    soldOutFoodPrice = "";

    constructor(name, time, count, amount) {
        this.movieName = name;
        this.showTime = time;
        this.soldOutTicket = count;
        this.soldOutFoodPrice = amount;
    }

    get movieName() {
        return this.movieName;
    }

    set movieName(name) {
        this.movieName = name;
    }

    get showTime() {
        return this.showTime;
    }

    set showTime(time) {
        this.showTime = time;
    }

    get soldOutTicket() {
        return this.soldOutTicket;
    }

    set soldOutTicket(count) {
        this.soldOutTicket = count;
    }

    get soldOutFoodPrice() {
        return this.soldOutFoodPrice;
    }

    set soldOutFoodPrice(amount) {
        this.soldOutFoodPrice = amount;
    }
}

class Cinema1 extends Cinema {

}

let cinema1 = new Cinema1("The NUN2", "7 pm", "50 tickets", "10 lakhs");
console.log(cinema1.movieName);