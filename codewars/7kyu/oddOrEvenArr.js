function oddOrEven(arr) {
    if (arr. length === 0) return 'even';

    let number = arr.reduce((sum, num) => sum + num, 0);

    return number % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0, 1, 4]));