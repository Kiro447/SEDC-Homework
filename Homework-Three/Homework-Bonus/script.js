function shouldServeDrinks (){
    let personAge = parseInt(prompt('Enter your age'));
    let bartenderBreak = Math.random()<0.5 ;
    console.log(bartenderBreak);
    if ( personAge >= 18 && bartenderBreak === true){
        alert('The bartender is on break');
        shouldServeDrinks();
    } else if ( personAge >= 18 && bartenderBreak !== true){
        alert('You can have a whisky on rocks')
        shouldServeDrinks(); 
    } else {
        alert('Youre too young')
        shouldServeDrinks(); 
    }

    // switch (personAge,bartenderBreak){
    //     case personAge > 18:
    //     case bartenderBreak === true:
    //     alert('The bartender is on break')
    //     shouldServeDrinks();
    //     break;
    //     case personAge > 18:
    //     case bartenderBreak === false:
    //         alert('You can have a drink')
    //         shouldServeDrinks();
    //         break;
    //     default:
    //         alert('You are too young')
    //         shouldServeDrinks();
    //         break;
    // }
    
}
shouldServeDrinks();