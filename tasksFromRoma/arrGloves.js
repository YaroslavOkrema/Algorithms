const arrGloves = ['red', 'red', 'blue', 'blue', 'red', 'red', 'orange', 'orange', 'blue']

function countOccurrences(arr) {
    const values = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    const newArr = Object.entries(values).sort((a, b) => b[1] - a[1]).map(keys => keys[0]);

    return newArr;
}

console.log(countOccurrences(arrGloves));
