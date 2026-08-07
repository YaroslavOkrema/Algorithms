function removeTarget(numbers, target) {
    let newArr = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== target) {
            newArr.push(numbers[i]);
        }
    }

    return newArr;
}

console.log(removeTarget([1, 2, 3, 2, 4], 2));