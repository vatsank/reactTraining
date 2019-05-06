"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const CabDriver_1 = __importDefault(require("./typescript/CabDriver"));
function print(driver, payment) {
    console.log(driver.toString());
    console.log(payment.amount);
}
const driver = new CabDriver_1.default(101, "Ramesh", 1234, 4.2, true);
const pmt = { amount: 4520, bankName: "HDFC",
    cheqNumber: 4555, date: new Date() };
print(driver, pmt);
