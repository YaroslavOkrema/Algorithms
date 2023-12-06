// Напишите функцию, которая принимает строку и возвращает новую строку с символами в обратном порядке.
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('Hello world'));