/*
let count = 0;
function recurse() {
    if (count === 5) {
        return 'done';
    }
    count++;
    return recurse();
}

console.log(recurse());
console.log('count = ', count);*/

function pow(x, y) {
    if (y === 0) {
        return 1;
    }

    return x * pow(x, y - 1);
}

console.log(pow(5, 3));

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
