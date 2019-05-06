class TravelRequest{

    constructor(requestId,requesterName,amount){

        this.requestId = requestId;
        this.requesterName = requesterName;
        this.amount = amount;
    }

    toString(){

        return `${this.requestId} ,${this.requesterName}, ${this.amount}`
    }
}

module.exports=TravelRequest;