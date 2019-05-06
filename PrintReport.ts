import CabDriver  from './typescript/CabDriver';
import {Payment} from './Payment';
function print(driver:CabDriver,payment:Payment):void{

    console.log(driver.toString());
    console.log(payment.amount);

}

const driver = new CabDriver(101,"Ramesh",1234,4.2,true);

const pmt:Payment ={amount:4520,bankName:"HDFC",
           cheqNumber:4555,date:new Date()};

print(driver,pmt);

