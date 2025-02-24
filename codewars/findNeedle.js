function findNeedle(arr) {
    let index = arr.indexOf('needle');

    return 'found the needle at position ' + index;
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))