// Входной массив
let num = [5, 10, 15, 20, 25, 30];

// Пороговое значение
//const threshold = 15;

// Ожидаемый результат: [20, 25, 30]

let filteredNumbers = num.filter(function(currentValue) {
    return currentValue > 15;
});

console.log(filteredNumbers); 