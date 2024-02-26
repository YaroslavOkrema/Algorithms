// input 'roma'
// output 'r1o1m1a1'

function strOne(str) {
    let latter = str.split('').join('1');
    return latter + 1;
}
console.log(strOne('roma'));