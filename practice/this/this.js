/*function getThis() {
    console.log(this);
}
getThis();*/

/*function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}

function getName() {
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName,
    info: {
        info: ['2.3ghz'],
        getInfo: function () {
            console.log(this)
        }
    }
}*/
/*prod1.getPrice();
prod1.info.getInfo();
prod1.getName();*/

/*
const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice
}
prod2.getName = prod1.getName;
prod2.getName();
// prod2.getPrice();

let str = 'Hello world';
const reversStr = str.split('').reverse().join('');
console.log(reversStr);

const prod3 = {
    name: 'Bmw',
    price: 2000,
    getPrice,
    // getName
};

getPrice.call(prod3, "*");

getPrice.apply(prod3, ['*']);
/!*
prod3.getName().getPrice();*!/

const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);
setTimeout(getPriceBind, 1000);*/

/*
function calcDiscount(age) {
    if (age > 65) {
        console.log(this.price / 2)
    } else {
        console.log(this.price)
    }
}
const item = {title: 'phone', price: 1000}
const calcDiscounts = calcDiscount.bind(item, [70]);
calcDiscounts();*/

/*
function createItem(title, price) {
    this.title = title;
    this.price = price;
    console.log(this)
}
new createItem('phone', '1000');*/

const obj = {
    getThis1: function () {
        console.log(this);
    },
    getThis2: () => {
        console.log(this);
    },
}

obj.getThis1();
obj.getThis2();
