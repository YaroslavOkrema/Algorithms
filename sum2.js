/*Дана функция sum, принимающая целое положительное число num. 
Функция должна возвращать сумму всех натуральных чисел от 1 до num включительно. 
Реализуйте функцию таким образом, чтобы она возвращала корректный результат для любого переданного значения num.*/

function sum2(num) {
    let res = 0;
    for(let i = 1; num >= i; i++) {
        res+=i;
    }
    return res;
}
console.log(sum2(2));