// 1 gallon = 3.78541 litter
// 1 mile = 1.60934 km
// 3.78541/1.60934 = 2.352
var convertor = 2.352;
var milesPerGallon = prompt('Enter the MPG to convert to KML ');
var kilometersPerLitter = milesPerGallon / convertor;
console.log(`${milesPerGallon} MPG equals to  ${kilometersPerLitter} KPL`)