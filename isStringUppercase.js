/*Создайте функцию, который будет проверять,
является ли строка ALL CAPS.

Примеры (ввод -> вывод)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True*/

function isStrUpperCase(str) {
    return str === str.toUpperCase();
}
console.log(isStrUpperCase('H')); // true