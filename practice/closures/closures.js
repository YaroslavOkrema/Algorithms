// let x = 1;
//
// const logToConsole = function () {
//     console.log(x);
// }
//
// x = 2;
//
// logToConsole();

// function makeCounter(count) {
//     return function () {
//         return count++;
//     };
// }
//
// let counter = makeCounter(0);
// let counter2 = makeCounter(0);
//
// console.log(counter()); //0
// console.log(counter()); //1
//
// console.log(counter2()); //0
// console.log(counter2()); //1

function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment(); //1
increment(); //2
increment(); //3
log(); // 0

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const count1 = counter();
console.log(count1()); // 1
console.log(count1()); // 2
console.log(count1()) //3