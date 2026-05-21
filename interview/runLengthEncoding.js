// Пройтись по рядку і записати, скільки разів підряд повторюється кожен символ.
// Є рядок: "hello"
// Треба повернути: [[1, "h"], [1, "e"], [2, "l"], [1, "o"]]

function runLengthEncoding(str) {
    let count = 0;
    const result = [];

    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const next = str[i + 1];
        count++;

        if (current !== next) {
            result.push([count, current]);
            count = 0;
        }
    }

    return result;
}

console.log(runLengthEncoding("hello world!"));