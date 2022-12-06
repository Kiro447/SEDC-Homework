let userInput = parseInt(prompt('How much money you have'), 10);


    if (userInput >= 1  && userInput <= 500 ) {
        alert('You are a brokie');
    }
    else if (userInput >= 501  && userInput <= 2000 ) {
        alert('Go buy cigars');
    }
    else if (userInput >= 2001  && userInput <= 5000 ) {
        alert('Buy a watch');
    }
    else if (userInput >= 5001  && userInput <= 1000000 ) {
        alert('You ain\'t a brokie');
    }
    else {
        alert(null)
    }


