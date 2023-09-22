class Account {
    static accounts = [];

    constructor(name, initialBlance) {
        this.id = this.generateUniqueId();
        this.name = name;
        this._balance = initialBlance;
    }

    generateUniqueId() {
        return 'id' + (new Date()).getTime() + Math.floor(Math.random() * 100);
    }

    get balance() {
        return this._balance;
    }

    set balance(newBlance) {
        if (typeof newBlance === "number" || newBlance >= 0) {
            this._balance = newBlance;
        } else {
            return console.log("Please insert a positive number");
        }
    }

    credit(amount) {
        if (amount > 0) {
            this._balance += amount;
        } else {
            return console.log("Creadit amount must be greater then 0");
        }
    }

    debit(amount) {
        if (amount > 0 && this._balance >= amount) {
            this._balance -= amount;
        } else {
            return console.log("Debit amount must be greater then 0");
        }
    }

    transferTo(otherAccount, amount) {
        if (amount > 0 && this._balance >= amount) {
            this.debit(amount);
            otherAccount.credit(amount);
        } else {
            return "Transfer amount must be greater then 0";
        }
    }

    static identifyAccounts(...accountsItems) {
        console.log(...accountsItems);
        return Account.accounts.filter(account => accountsItems.includes(account.id));
    }
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);

saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);

const res = Account.identifyAccounts(current, saving);

saving.balance = "hello";
