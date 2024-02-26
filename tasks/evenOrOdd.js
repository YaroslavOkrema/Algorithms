/*Создайте функцию, которая принимает целое число в качестве аргумента 
и возвращает "Even" для четных чисел или "Odd" для нечетных.*/

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