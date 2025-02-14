//Напишіть функцію summation(num), яка приймає невід'ємне ціле число num і повертає суму всіх цілих чисел від 1 до num (включно).
function summation(num) {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(summation(8))