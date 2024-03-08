// Использование DOM-объекта
const button = document.querySelector('.button');

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

const options = {
    'capture': false, // фаза на которой должен сработать обработчик
    'once': true, // если тру, то обработчик будет удален после выполнения
    'passive': false // не вызывает preventDefault()
}

function showConsole() {
    console.log('Квак!');
}

button.addEventListener('click', showConsole, options);

