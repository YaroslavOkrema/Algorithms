/* Вам дается число, и вы должны сделать его отрицательным. 
Но, может быть, число уже отрицательное?

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0 
makeNegative(0.12); // return -0.12 */

function returnNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}
console.log(returnNegative(0.12));