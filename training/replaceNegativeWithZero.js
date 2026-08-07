function replaceNegativeWithZero(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            result.push(0)
        } else {
            result.push(numbers[i])
        }
    }

    return result;
}

console.log(replaceNegativeWithZero([1, -2, 3, -5]));