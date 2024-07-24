/*
let num = 10;
console.log(isNaN(NaN));

function sayHi() {
    console.log('Hello');
}

setTimeout(sayHi, 3000);

// с аргументами

function sayHello(hello, name) {
    console.log(hello + ', ' + name);
}

setTimeout(sayHello, 1000, 'Hello', 'Ivan');

let timerId = setInterval(() => console.log('tick'), 2000);
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);*/

/*
function printNumbers(from, to) {
    for (let i = from; i < to; i++) {
        console.log(i);
    }
}

setInterval( function () {
    printNumbers(0, 10);
}, 1000);*/

/*function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(1, 10);*/

/*function printNumbers(from, to) {
    let current = from;

    setTimeout(function count () {
        console.log(current);
        if (current < to) {
            setTimeout(count, 1000)
        }
        current++
    }, 1000)
}
printNumbers(5, 10);*/
