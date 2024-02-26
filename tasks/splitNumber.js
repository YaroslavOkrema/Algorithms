/*Необходимо создать две функции для разделения числа. 
Первая функция, splitNumber, должна принимать число в качестве аргумента и возвращать строку, 
в которой два числа равны половине введенного числа. 
Вторая функция, splitNumberAsString, также должна принимать число, 
но возвращать результат в виде массива, содержащего два одинаковых значения.*/

// строка 
function splitNumber(num) {
    return `num1: ${num / 2} num2: ${num / 2}`;
}
console.log(splitNumber(10));


// массив
function splitNumberAsString(num2) {
    const res = num2 / 2;
    return [res, res];
}
console.log(splitNumberAsString(10));