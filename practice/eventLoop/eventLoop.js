/*
console.log('start');

console.log('start 2');

function timeOut2Sec() {
    console.log('timeOut2Sec');
}

setTimeout(function () {
    console.log('Inside timeout after 2 sec');
}, 4000);

setTimeout(timeOut2Sec, 2000);


console.log('end');*/

console.log('Start');

setTimeout(() => {
    console.log('Macrotask - Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Microtask - Promise');
});

console.log('End');
