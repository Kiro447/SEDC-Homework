let convertor = {
    years: 7,
    dogToHuman: function (dogYears) {
        if (isNaN(dogYears)) {
            alert('You should enter your dog years');
            this.menu();
        } else if (dogYears < 0) {
            alert('Enter valid number of years');
            this.menu();
        } else {
            alert(`Your dog years to human years is ${this.years = dogYears / this.years}`)
            this.menu();
        }
    },
    humanToDog: function (humanYears) {
        if (isNaN(humanYears)) {
            alert('You should enter your dog years');
            this.menu();
        } else if (humanYears < 0) {
            alert('Enter valid number of years');
            this.menu();
        } else {
            console.log(humanYears)
            alert(`Your human years to dog years is ${this.years = humanYears * this.years}`)
            this.menu();
        }
    },
    menu: function (menu) {
        let userInput = prompt('Enter D for dog to human, vice versa enter H').toLowerCase();
        console.log(userInput);
        switch (userInput) {
            case 'd':
                let dogYears = parseInt(prompt('Enter the the years you want to convert to find it in human years'));
                this.dogToHuman(dogYears);
                console.log(dogYears);
                break;
            case 'h':
                let humanYears = parseInt(prompt('Enter the the years you want to convert to find it in dog years'));
                this.humanToDog(humanYears);
                console.log(dogYears);
                break;
            default:
                alert('Enter a valid input')
                this.menu()
                break;
        }
    }
}

convertor.menu();