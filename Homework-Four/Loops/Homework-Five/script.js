const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, '22', null, undefined, 'blabla'];
// max 20  // min 1
function maxMinSum(array) {
    let max = Math.max(...array.filter(array => typeof array === 'number'));
    // console.log(max)
    const min = Math.min(...array.filter(array => typeof array === 'number'));
    // console.log(min);
    const result = max + min;
    console.log(result)
}
maxMinSum(arrayOfNumbers);

