
let arrayOfNums = [1, 3, 4, 6, 23, 33, 24, 55, 65, 127, 8, 9, -24, 12, "ssss", null, undefined];
let filteredArray = [];
for (let num of arrayOfNums) {
    if (typeof num === 'number') {
        filteredArray.push(num);
    }
}
console.log(filteredArray)

function minMaxSum(inputArray) {
    let counter = 0;
    let max = -Infinity;
    let min = Infinity;
    while (counter < inputArray.length) {
        if (inputArray[counter] > max) {
            max = inputArray[counter];
        }
        if (inputArray[counter] < min) {
            min = inputArray[counter]
        }
        counter++;
    }
    console.log(`${min} is the smallest number`)
    console.log(`${max} is the largest number`)
    let sum = min + max;
    console.log(`${sum} is the sum of max and min number`);
}
minMaxSum(filteredArray)