function findLastDigitIndex(text) {
    let lastIndex = -1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9') {
            lastIndex = i;
        }
    }

    return lastIndex;
}

console.log(findLastDigitIndex("a1b2"));