let arr = [20, 4, 5, 9];

let a = arr.reduce(function(accum, currentValue, index) {
    console.log( 'accum = ' + accum);
    console.log( 'currentValue = ' + currentValue);
    console.log( 'index: ' + index);
    return accum + currentValue;
});
console.log(a);