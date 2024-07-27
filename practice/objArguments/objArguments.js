// В цьому прикладі функція sum використовує об'єкт arguments для обчислення суми всіх переданих їй аргументів.
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 4, 6));
console.log(sum(4, 5));