//Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в этом массиве.
function getMaxOfArray(nums) {
    return Math.max(...nums);
}
console.log(getMaxOfArray([1, 3, 6, 2, 10, 23]));