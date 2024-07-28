// let x = 1;
//
// function consoleLog() {
//     console.log(x);
// }
//
// consoleLog();

// function makeCounter(count) {
//     return function () {
//         return count++;
//     }
// }
//
// let counter = makeCounter(0);
// let counter2 = makeCounter(0);
//
// console.log(counter());
// console.log(counter());
//
// console.log(counter2());
// console.log(counter2());

function createIncrement() {
    let count = 0;
    function increment() {
        console.log(count++);
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();
increment(); // 1
increment(); // 2
increment(); // 3
log(); // 0