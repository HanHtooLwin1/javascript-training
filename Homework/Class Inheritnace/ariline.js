class Airline {
    airlineNumber = "";
    seatNumber = "";
    takeOffTime = "";
    ticketPrice = "";

    constructor(airlineNumber, seatNumber, time, amount) {
        this.airlineNumber = airlineNumber;
        this.seatNumber = seatNumber;
        this.takeOffTime = time;
        this.ticketPrice = amount;
    }

    get airlineNumber() {
        return this.airlineNumber;
    }

    set airlineNumber(number) {
        this.airlineNumber = number;
    }

    get seatNumber() {
        return this.seatNumber;
    }

    set seatNumber(number) {
        this.seatNumber = number;
    }

    get takeOffTime() {
        return this.takeOffTime;
    }

    set takeOffTime(time) {
        this.takeOffTime = time;
    } 

    get ticketPrice() {
        return this.ticketPrice;
    }

    set ticketPrice(amount) {
        this.ticketPrice = amount;
    }
}

class Passenger1 extends Airline {

}

let passenger1 = new Passenger1("Airline No.1", "16", "6 pm", "$320");
console.log(passenger1.ticketPrice);
