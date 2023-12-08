// Напишите функцию, которая принимает массив чисел и возвращает наименьшее число в этом массиве.
function getMinOfArray(nums) {
    return Math.min(...nums);
}
console.log(getMinOfArray([3, 0, 10, 4, 7, 8]));