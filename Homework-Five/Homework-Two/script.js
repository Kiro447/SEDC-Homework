let arrOfNums = [2, 4, 6, 2];
let body = document.querySelector('body');
let sum = 0
let mathematicalEq = "";
for (let i = 0; i < arrOfNums.length; i++) {
    body.innerHTML += "<ul><li>" + arrOfNums[i] + "</li></ul>"
    sum += arrOfNums[i];
    mathematicalEq += arrOfNums[i] + " + ";
}
mathematicalEq += " = " + sum;
let newMath = mathematicalEq.slice(0, 14);
let secondMath = mathematicalEq.slice(16, 21)
let finalMath = newMath + secondMath;
// console.log(finalMath);
// console.log(secondMath);
// console.log(newMath);
body.innerHTML += "<ul><li> The sum of the array is :" + sum + "</li></ul>"
body.innerHTML += "<ul><li> The mathematical equation is  :" + finalMath + "</li></ul>"
// morase da napravam vaka so 3 stringa slice bidejki so slice na string mi go vraka samo delot do kade sto secam.



