let a = [3, 4, 5];
 
// умножить каждый лемент массива на 2
let b = [];
for(let i = 0; i < a.length; i++) {
    b[i] = a[i] * 2;
}
console.log(a);
console.log(b);

// let b = a.map(function(currentValue, index, arr){
//    return lalala;
//});

let c = a.map(function(currentValue) {
    return currentValue * 2;
});
console.log(c);