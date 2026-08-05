function removeDigits(text) {
    let res = '';

    for (let i = 0; i < text.length; i++) {
        if (!(text[i] >= "0" && text[i] <= "9")) {
            res += text[i];
        }
    }

    return res;
}

console.log(removeDigits("abc123"));