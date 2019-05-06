export default class CabDriver{

    private driverId:number;
    private driverName:string;
    private numberOfTrips:number;
    private rating:number;
    private active:boolean;

    constructor(driverId:number,
        driverName:string,numberOfTrips:number,
        rating:number,active:boolean){

            this.driverId = driverId;
            this.driverName = driverName;
            this.rating = rating;
            this.numberOfTrips = numberOfTrips;
            this.active = active;
    }

    toString(){

        return `${this.driverName},${this.rating}`
    }
}

