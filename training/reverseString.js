function reverseString(text) {
    let reverseStr = '';
    let lastIndex = text.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        reverseStr += text[i];
    }

    return reverseStr;
}

console.log(reverseString("hello"));