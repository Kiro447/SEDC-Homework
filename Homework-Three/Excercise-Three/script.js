let dateOfBirth = parseInt(prompt('Enter your birth date'));
// console.log(dateOfBirth) debug
let calculateAge = () => {
    let currentYear = new Date().getFullYear();
    // console.log(currentYear) debug
    let yourAge = currentYear - dateOfBirth;
    alert(`You have ${yourAge} years`);
}
calculateAge();
