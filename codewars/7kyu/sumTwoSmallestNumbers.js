// [19, 5, 42, 2, 77] => 2 + 5 = 7

function sumTwoSmallestNumbers(numbers) {
    const sortArr = numbers.sort((a, b) => a - b);

    const [firstNum, secondNum] = sortArr;

    return firstNum + secondNum;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))