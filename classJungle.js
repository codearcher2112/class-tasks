class Jungle {
    constructor() {
        this.tigers = [];
        this.monkeys = [];
        this.snakes = [];
    }

    addTiger(tiger) {
        this.tigers.push(tiger);
    }

    addMonkey(monkey) {
        this.monkeys.push(monkey);
    }

    addSnake(snake) {
        this.snakes.push(snake);
    }

    soundOff() {
        const allAnimals = [...this.tigers, ...this.monkeys, ...this.snakes];

        for (let animal of allAnimals) {
            animal.makeSound();
            console.log(`[${animal.constructor.name}] Sound: ${animal.sound}, Energy: ${animal.getEnergy()}`);
        }
    }
}

class Animal {
    constructor() {
        this.energy = 0; 
    }

    makeSound() {
        this.energy -= 3;
        if (this.energy < 0) this.energy = 0;
    }

    eatFood() {
        this.energy += 5;
    }

    sleep() {
        this.energy += 10;
    }

    getEnergy() {
        return this.energy;
    }
}

class Tiger extends Animal {
    constructor() {
        super();
        this.sound = "Roar";
    }

    makeSound() {
        super.makeSound();
    }

    eatFood(food) {
        if (food instanceof Grain) {
            console.log(`I can't eat that`);
        } else {
            super.eatFood();
        }
    }

    sleep() {
        super.sleep();
        this.energy += 5;
    }
}

class Monkey extends Animal {
    constructor() {
        super();
        this.sound = "Oooo Oooo"
    }

    eatFood() {
        super.eatFood();
        this.energy += 2;
    }

    makeSound() {
        super.makeSound();
        this.energy -= 4;
    }

    play() {
        if (this.energy > 8) {
            console.log(`Oooo Oooo`);
            this.energy -= 8;
        } else {
            console.log(`I'm too tired`);
        }
    }
}

class Snake extends Animal {
    constructor() {
        super();
        this.sound = "Ssss";
    }
}

class Food {

}

class Fish extends Food {

}

class Grain extends Food {

}

class Meat extends Food {

}

const jungle = new Jungle();
const tiger = new Tiger();
const monkey = new Monkey();
const snake = new Snake();

jungle.addTiger(tiger);
jungle.addMonkey(monkey);
jungle.addSnake(snake);

monkey.play();
tiger.eatFood(new Grain());
jungle.soundOff();
