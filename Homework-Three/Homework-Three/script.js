const atm = {
    balance: 500,

    currentBalance: function () {
        alert(`Your current balance is ${this.balance}`)
        this.menu();
    },
    withdrawMoney: function (withdraw) {
        if (isNaN(withdraw)) {
            alert('Enter a valid amount you want to withdraw');
            this.menu();
        } else if (withdraw > this.balance) {
            alert('Your withdraw amount is higher than your balance');
            this.menu();
        } else {
            alert(`You have withdrawn ${withdraw}$`)
            this.balance -= withdraw ;
            this.currentBalance();
        }
    },
    depostiMoney: function (deposit) {
        if (isNaN(deposit)) {
            alert('Enter a valid amount you want to deposit');
            this.menu();
        } else if (deposit < 0) {
            alert('Enter a valid number you want to deposit');
            this.menu();
        } else {
            alert(`You have deposited ${deposit}$`)
            this.balance += deposit;
            this.currentBalance();
        }
    },
    windowClose: function closeOpenedWindow() {
        openedWindow.close();
    },
    menu: function (menu) {
        let userInput = parseInt(prompt('Enter 1 for withdraw, Enter 2 for deposit, Enter 3 for balance check, Enter 4 for exit'), 10);
        switch (userInput) {
            case 1:
                let withdraw = parseInt(prompt('Enter the amount of money you want to withdraw'));
                this.withdrawMoney(withdraw);
                break;
            case 2:
                let deposit = parseInt(prompt('Enter the amount of money you want to deposit'))
                this.depostiMoney(deposit);
                break;
            case 3:
                this.currentBalance();
                break;
            case 4:
                return;
            default:
                alert('Enter a valid input')
                this.menu();
                break;
        }
    }

}

atm.menu();