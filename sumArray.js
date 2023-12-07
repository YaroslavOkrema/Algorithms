// Напишите функцию, которая принимает массив чисел и возвращает их сумму

function sumArray(nums) {
    return nums.reduce((sum, current) => sum + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));