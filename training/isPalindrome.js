function isPalindrome(text) {
    let palindrome = '';
    let lastIndex = text.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        palindrome += text[i];
    }

    return text === palindrome;
}

console.log(isPalindrome("level"));

function isPalindrome2(text) {
    for (let i = 0; i < text.length / 2; i++) {
        const rightIndex = text.length - 1 - i;

        if (text[i] !== text[rightIndex]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome2("level"));
console.log(isPalindrome2("hello"));