// Create a class called BankAccount with properties
// balance and interestRate. Add a method called
// transfer that transfers a specified amount
// from one bank account to another.

class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }

    deposit(amount) {
        this.balance += amount;
    }

    addInterest() {
        this.balance += this.balance * (this.interestRate / 100);
    }

    transfer(amount, recipient) {
        if(this.balance < amount) {
            throw new Error("Insufficient financial assets");
        }

        this.balance -= amount;
        recipient.deposit(amount);
    }
}

let transfer = new BankAccount(1000, 3);