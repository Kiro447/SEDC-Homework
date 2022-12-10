function shouldServeDrinks() {
    let personAge = parseInt(prompt('Enter your age'));
    let bartenderBreak = Math.random() < 0.5;
    //False - not on break True - on a break
    console.log(bartenderBreak);
    if (personAge >= 18 && bartenderBreak) {
        alert('The bartender is on break');
        shouldServeDrinks();
    } else if (personAge >= 18 && !bartenderBreak) {
        alert('You can have a whisky on rocks')
        shouldServeDrinks();
    } else {
        alert('Youre too young')
        shouldServeDrinks();
    }
}
shouldServeDrinks()