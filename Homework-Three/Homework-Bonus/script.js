function shouldServeDrinks() {
    let personAge = parseInt(prompt('Enter your age'));
    let bartenderBreak = Math.random() < 0.5;
    console.log(bartenderBreak);
    if (personAge >= 18 && bartenderBreak === true) {
        alert('The bartender is on break');
        shouldServeDrinks();
    } else if (personAge >= 18 && bartenderBreak !== true) {
        alert('You can have a whisky on rocks')
        shouldServeDrinks();
    } else {
        alert('Youre too young')
        shouldServeDrinks();
    }
}
shouldServeDrinks()