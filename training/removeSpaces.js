function removeSpaces(text) {
    let res = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
            res += text[i];
        }
    }

    return res;
}

console.log(removeSpaces("hello world"));