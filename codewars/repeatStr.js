function repeatStr(n, s) {
    let res = '';

    for (let i = 1; i <= n; i++) {
        res += s;
    }

    return res;
}

function repeatStr2 (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(3, "Hello"));
console.log(repeatStr2(3, "Hello"));