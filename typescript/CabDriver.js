"use strict";
class CabDriver {
    constructor(driverId, driverName, numberOfTrips, rating, active) {
        this.driverId = driverId;
        this.driverName = driverName;
        this.rating = rating;
        this.numberOfTrips = numberOfTrips;
        this.active = active;
    }
    toString() {
        return `${this.driverName},${this.rating}`;
    }
}
const driver = new CabDriver(101, "Ramesh", 1234, 4.2, true);
console.log(driver.toString());
