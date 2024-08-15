/*let arr = [20, 4, 5, 9];

let a = arr.reduce(function(accum, currentValue, index) {
    console.log( 'accum = ' + accum);
    console.log( 'currentValue = ' + currentValue);
    console.log( 'index: ' + index);
    return accum + currentValue;
});
console.log(a);*/

const arr = [1, 2, 3, 4];

const initialValue = 0;
const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sum);