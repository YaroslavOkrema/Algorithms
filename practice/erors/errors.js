// let data ;

// try {
//     data = JSON.parse('{ "name": "Alex }');
// }
// catch(error) {
//     data = { "name": "unknown" };
//     console.log('Не получилось распарсить JSON', error);
//     // console.log(error);
//     // console.dir(error);
//     //
//     // console.log(error.message);
//     // console.log(error.stack);
//     // console.log(error.name);
// }

// try catch работает только с синхронным кодом

// try {
//     document.querySelector('button').innerText = 'Нажми на меня';
// }
// catch (error) {
//     console.dir(error);
// }
//
// console.log('Другая часть кода');

// function calculate(a, b) {
//     if (typeof a !== 'number') {
//         throw new Error('a - не число');
//     }
//
//     if (typeof b !== 'number') {
//         throw 'b - не число';
//     }
//
//     return a + b;
// }
//
// // console.log(calculate("5", 6));
//
// try {
//     console.log(calculate(A, B));
// }
// catch (error) {
//     console.log(error, calculate(1,1));
// }
// finally {
//     console.log('123');
// }

function parseJson(json) {
    console.log('startAnimation');

    try {
        const data = JSON.parse(json);
        return data.name;
    }
    catch (error) {
        console.log(error);

        throw new Error('Error');
    }
    finally {
        console.log('endAnimation');
    }
}
parseJson('{ "name": "Alex }');
