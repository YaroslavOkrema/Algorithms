function countDigits(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= "0" && text[i] <= "9") {
            count++;
        }
    }

    return count;
}

console.log(countDigits("abc123"));