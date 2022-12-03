var cellPhones = prompt("Enter the number of cellphones");
var cellPhonePrice = 119.95;
var taxRate = 1.05;
var totalAmount = cellPhones * ( cellPhonePrice * taxRate );
console.log(`The total price for ${cellPhones} phones is ${totalAmount} $ `);