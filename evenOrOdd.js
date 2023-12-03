function evenOrOdd(num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log(evenOrOdd(9));

function evenOrOdd2(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd2(9));