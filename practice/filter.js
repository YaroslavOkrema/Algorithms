let a = [3, -12, 0, 4, 5, -8];

//выбрать элементы массива больше 0

let b = [];
for(let i = 0; i < a.length; i++) {
    if(a[i] > 0) b.push(a[i]);
}
console.log(a);
console.log(b);

// let c = a.filter(function(currentValue, indexElem, arr){
    
//});

let c = a.filter(function(currentValue, index) {
    return currentValue > 0;
    //return index % 2 == 0; четность по индексу
});
console.log(c);