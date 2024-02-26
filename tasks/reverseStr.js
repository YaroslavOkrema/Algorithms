// Напишите функцию, которая принимает строку и возвращает новую строку с символами в обратном порядке.
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('Hello world'));

// second solution
function reverseStr2(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseStr('level'));