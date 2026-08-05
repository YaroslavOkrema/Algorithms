function countVowels(text) {
    const vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));

function countVowels2(text) {
    const vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                count++;
                break;
            }
        }
    }

    return count;
}

console.log(countVowels2("hello"));