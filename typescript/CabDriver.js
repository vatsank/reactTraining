"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = CabDriver;
