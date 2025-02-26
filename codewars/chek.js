function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }

    return false;
}

function check2(a, x) {
    return a.includes(x);
}

console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check2([101, 45, 75, 105, 99, 107], 107));