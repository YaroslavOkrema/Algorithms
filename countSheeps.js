/* 
Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. 
Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).
Например,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true
]

Правильным ответом будет 17.

Подсказка: не забудьте проверить на наличие плохих значений, таких как null/undefined
*/
sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
  ]

function countSheeps(sheep) {
    let res = 0;
    for(let i = 0; i < sheep.length; i++) {
        if(sheep[i] === true) {
            res++;
        }
    }
    return res;
}
console.log(countSheeps(sheep)); // 17 