function distinct(a) {
    return a.filter((elem, index) => a.indexOf(elem) === index);
}

console.log(distinct([1, 2, 1, 1, 3, 2]));