function lettersInWord(str) {
    return str.split('').reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

console.log(lettersInWord('hello'))
