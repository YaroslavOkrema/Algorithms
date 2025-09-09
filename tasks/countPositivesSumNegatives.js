/* Дан массив целых чисел.

Верните массив, в котором первый элемент - счетчик положительных чисел, а второй - сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным числом.

Если входной массив пуст или равен null, возвращается пустой массив.

Пример
Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] следует вернуть [10, -65]. */

function countPositivesSumNegatives(arr) {
    if(arr === null || !arr.length ) return [];
    
    let count = 0;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        count++;
      }
      if(arr[i] < 0) {
        sum += arr[i];
      }
    }
    return [count, sum];
}
console.log(countPositivesSumNegatives([]));

function countOfPositiveSunOfNegative(arr) {
    const countPositive = arr.reduce((acc, num) => num > 0 ? acc + 1 : acc, 0);
    const sumOfNegative = arr.reduce((acc, num) => num < 0 ? acc + num : acc, 0);

    return [countPositive, sumOfNegative];
}

console.log(countOfPositiveSunOfNegative2([1, 2, 3, 4, -4, -5, 10]));