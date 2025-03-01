// "apple ban" --> ["apple 5", "ban 3"]
function addLength(str) {
    return str.split(' ').map(elements => `${elements} ${elements.length}`);
}

console.log(addLength("apple ban"));