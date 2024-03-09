// Использование DOM-объекта
/*const button = document.querySelector('.button');*/

/*button.onclick = function () {
    console.log('Клик!');
}

button.onclick = function () {
    console.log('Клак!');
}*/

// onClick не можно повесить несколько обработчиков на одно и тоже событие

/*button.addEventListener('click', function () {
    console.log('Клик!');
});

button.addEventListener('click', function () {
    console.log('Клак!');
})*/

/*function showConsole() {
    console.log('Квак!');
    button.removeEventListener('click', showConsole);
}

button.addEventListener('click', showConsole);*/

// const options = {
//     'capture': false, // фаза на которой должен сработать обработчик
//     'once': true, // если тру, то обработчик будет удален после выполнения
//     'passive': false // не вызывает preventDefault()
// }
//
// function showConsole() {
//     console.log('Квак!');
// }
//
// button.addEventListener('click', showConsole, options);

/*const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

block.addEventListener('click', function (event) {
    console.log('Клик на блок');
    //console.log(event.target);
})

blockInner.addEventListener('click', function (event) {
    console.log('Клик на блок 2 уровня');
}, {'capture': false})

blockInnerInner.addEventListener('click', function (event) {
    console.log('Клик на блок 3 уровня');
    //event.stopPropagation();
})*/

/*const button = document.querySelectorAll('.button');

function showConsole() {
    console.log('Ура!');
}

button.forEach(buttonItem => {
    buttonItem.addEventListener('click', showConsole);
});*/

/*const lesson = document.querySelector('.lesson');

function showConsole() {
    console.log('Ура');
}

lesson.addEventListener('click', function (event) {
    if (event.target.closest('.button')) {
        showConsole();
    }
})*/

/*const menuBody = document.querySelector('.menu');

document.addEventListener('click', menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}*/

const link = document.querySelector('.link');

link.addEventListener('click', function (event) {
    console.log('Наши действия');
    event.preventDefault();
})