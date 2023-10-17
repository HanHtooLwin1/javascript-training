class Wifi {
    wifiName = "";
    userAccount = "";
    password = "";
    mbps = "";

    constructor(name, accountName, password, mbps) {
        this.wifiName = name;
        this.userAccount = accountName;
        this.password = password;
        this.mbps = mbps;
    }

    get wifiName() {
        return this.wifiName;
    }

    set wifiName(name) {
        this.wifiName = name;
    }

    get userAccount() {
        return this.userAccount;
    }

    set userAccount(name) {
        this.userAccount = name;
    }
    
    get password() {
        return this.password;
    }

    set password(password) {
        this.password = password;
    }

    get mbps() {
        return this.mbps;
    }

    set mbps(mbps) {
        this.mbps = mbps;
    }
}

class MyWifi extends Wifi {

}
let myWifi = new MyWifi("Mahar Net", "Mg Mg", "1111", "20 mbps");
console.log(myWifi.wifiName);