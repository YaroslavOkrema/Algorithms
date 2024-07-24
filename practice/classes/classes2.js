/*
/!*
const animal = {
    name: 'Animal',
    age: 5,
    hasTail: true
}

console.log(animal);*!/

class Animal {
    // static переменные и методы доступны только в самом классе
    static type = 'ANIMAL';
    // constructor lkz для инициализации начальных значений объекта данного класса
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log('Meow');
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// });
//
// console.log(Animal.type);

class Cat extends Animal {
    static type = 'CAT';

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    // если в дочернем классе реалезован какой-то метод то он перебивает родительский метод
    voice() {
        // вызываем родительский метод
        super.voice();
        console.log('Meow meow I am cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
});

console.log(cat);*/

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
});

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
});

class Circle extends Box {
    constructor(options) {
        super(options);

        this.$el.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
});
