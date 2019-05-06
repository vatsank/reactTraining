var TravelRequest = require('./TravelRequest');

function printAll(requestList,funcRef){
// replacing var with let creates a local scope
    for(var i=0;i<requestList.length;i++){
        console.log(requestList[i].toString());
        console.log(funcRef(requestList[i].amount));
    }
    // If let is used i becomes undefined
    // if var is used i continues to exist
    console.log(i);
}

// approve is name  () => annonymous function 
// {} function body
 const approve = (amount) =>{ 
       let status = false;
      if(amount<5000){ status = true} 
     return status;
    };

const ramsRequest =
            new TravelRequest(101,"Ramesh",6500.00);

            const shyamsRequest =
            new TravelRequest(102,"Shyam",3500.00);

            //console.log(ramsRequest.toString());            

            const list = [ramsRequest,shyamsRequest];

            printAll(list,approve);

             // function approve(amount){
            //     return true;
            // }
            // instead of writing  a named function
            // above an arrow function is passed 

            printAll(list, (amount)=>true);

           