// [1,2,'a','b']) == [1,2]
function filter_list(l) {
    return l.filter(el => typeof el === 'number');
}

console.log( filter_list([1,"a","b",0,15]));