let b = [8, 9, 7];
console.log(b);

b.forEach(function(elem, index) {
    console.log(elem*2);
    console.log(index);
    console.log('--');
});