var numbers = [1, 2, 3, 4, 5, 'sdsd'];

function validateNumber(numbers) {
  if (typeof numbers !== "number" || (isNaN(numbers))) {
    return false;
  }
  else {
    return true;
  }
}
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      console.log('Your array consists of other types than numbers');
      return;
    }
    total += numbers[i]
  }
  console.log(`The total sum of the array is ${total}`)
}

sum(numbers);


