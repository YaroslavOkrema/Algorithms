// Использование DOM-объекта
const button = document.querySelector('.button');

/*button.onclick = function () {
    console.log('Клик!');
}

button.onclick = function () {
    console.log('Клак!');
}*/

// onClick не можно повесить несколько обработчиков на одно и тоже событие

button.addEventListener('click', function () {
    console.log('Клик!');
});

button.addEventListener('click', function () {
    console.log('Клак!');
})

function showConsole() {
    console.log('Квак!');
}

