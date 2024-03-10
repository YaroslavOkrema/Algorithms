// // const animal = {
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // }
// // console.log(animal);

// class Animal {

//     static type = 'ANIMAL';

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am animal');
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })

// // console.log(animal.voice);

// class Cat extends Animal {
//     static type = 'CAT';

//     constructor(options) {
//         super(options)
//         this.color = options.color;
//     }

//     voice() {
//         super.voice();
//         console.log('I am cat');
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// console.log(cat.voice);

/*
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);

        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 130,
    color: 'blue'
})

class Circle extends Box { 
    constructor(options) {
        super(options);

        this.$el.style.borderRadius = '50%';
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})*/

/*
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

Car.prototype.start = function () {
    console.log(`${this.brand} - start!`);
}

const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');
console.log(tesla);*/

/*
class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    start() {
        console.log(`${this.brand} - start!`);
    }
    stop() {
        console.log(`${this.brand} - STOP!`);
    }

    static discount() {
        console.log('discount - 10%');
    }

    set rating(value) {
        this.score = value.toUpperCase();
    }

    get rating() {
        return this.score;
    }
}

const tesla = new Car('Tesla', 'silver');
const nissan = new Car('Nissan', 'red');
console.log();*/

class Car {
    constructor(brand) {
        this.brand = brand;
        this.gasTank = 100;
        this.zapravka = [];
    }

    getGas() {
        this.gasTank += 10;
        const stamp = Date.now();
        const time = new Date(stamp);
        this.zapravka.push(time.toString());
        return this.gasTank;
    }

    drive() {
        this.gasTank -= 10;
        return this.gasTank;
    }
}

class HybridCar extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    autoPark() {
        console.log('Auto parking');
    }
}

const lexus = new HybridCar('Lexus', 'RX')
const nissan = new Car('Nissan')
console.log(lexus.autoPark());
