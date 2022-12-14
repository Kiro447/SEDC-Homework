let arrayOfNums = [1, 2, 3, 4, 5, '9',];

function validateNumber(array) {
    if (array.filter(array => typeof array == 'string')) {
        array.pop(array)
        sumOfArray(array);
    }

}
// ako ima poveke od 2 stringa pagja
function sumOfArray(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    console.log(`The total sum of the array is ${total}`);
}


validateNumber(arrayOfNums)