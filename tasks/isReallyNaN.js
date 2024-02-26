// Напишите функцию isReallyNaN, которая возвращает true, 
// только если передан аргумент, который оценивается как NaN, 
// и возвращает false в противном случае.

function isReallyNaN(val) {
    return Number.isNaN(val);
}
console.log(isReallyNaN(NaN)); // true