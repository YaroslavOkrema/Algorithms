function findFirstDigitIndex(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9') {
            return i;
        }
    }

    return -1;
}

console.log(findFirstDigitIndex("asfsfdsfsd"));
