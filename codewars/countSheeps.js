//у тебе є масив (список), в якому знаходяться "вівці".
// Кожна вівця позначена як true, а якщо її немає — false.
// Твоє завдання — підрахувати, скільки в масиві true.
function countSheeps(sheep) {
    const arrWithSheep = [];

    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            arrWithSheep.push(sheep[i])
        }
    }

    return arrWithSheep.length;
}

function countSheeps2(sheep) {
    return sheep.filter(sheeps => sheeps === true).reduce((sum, value) => sum +=  value, 0)
}

function countSheeps3(sheep) {
    return sheep.reduce((counter, value) => counter += (value === true ? 'true' : 'false'), 0);
}

console.log(countSheeps(
    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
));

console.log(countSheeps2(
    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
));
