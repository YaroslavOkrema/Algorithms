/*
const URL = 'https://jsonplaceholder.typicode.com/todos/1';

function getData2() {
    fetch(URL)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            // data.userId
            return fetch('/video')
        })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function getData() {
    const userMeta = await fetch(URL);
    const userData = await userMeta.json(); //userData.userId

    const videosMeta = await fetch('/video');
    const videos = await videosMeta.json();
}

getData();

async function errorTest() {
    const data = await fetch('fefefefefes').catch((error) => {
        console.log('error', error);

        return { error: true }
    });
    console.log(data);
   /!* let info = [];

    try {
        const data = await fetch('fdsfdsfsd');
        console.log(data);

        info = await data.json();
        console.log(info);
    }
    catch (error) {
        console.log(error);
    }

    if (info.length === 0) {
        return;
    }

    const text = info[0].text;*!/
}

errorTest();*/

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const button = document.querySelector('#my-button');
const button2 = document.querySelector('#my-button2');
const loading = document.querySelector('#loading');

// promise
button.addEventListener('click', () => {
    addLoader();

    fetch(URL)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log(data);
        })
        .finally(() => {
            removeLoader();
        });
});

//async/await
button2.addEventListener('click', async () => {
    addLoader();
    const meta = await fetch(URL);
    const data = await meta.json();
    removeLoader();

    console.log(data);
});

function addLoader() {
    loading.classList.add('show');
}

function removeLoader() {
    loading.classList.remove('show');
}

// promise -> async
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch((error) => {
        console.log(error);
    });

async function loadJson2(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            return response.json();
        } else {
            new Error(response.status);
        }
    }
    catch (error) {
        console.log(error);
    }
}

loadJson2('no-such-user.json');
