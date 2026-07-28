//Напиши функцію sumPositiveEven(numbers), яка повертає суму всіх чисел, які одночасно: додатні, парні.

function sumPositiveEven(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0 && numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumPositiveEven([1, 2, 3, 4, -6]));