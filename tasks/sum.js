function sum(num) {
    return function(num2) {
        let res = 0;
        for (let i = 0; i < num; i++) {
            res = num + num2;
            return res;
        }
    }
}
console.log(sum(5)(10));