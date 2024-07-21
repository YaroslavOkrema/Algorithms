/*function fetchUserInfo(callback) {
    setTimeout(() => {
        // fetch
        const data = { id: 1, name: 'Alex'};
        callback(data);
    }, 1000);
}

function fetchUserGames(id, callback) {
    setTimeout(() => {
        // fetch(id)
        const data = ['game1', 'game2'];
        callback(data);
    }, 1000);
}

function run() {
    fetchUserInfo((userInfo) => {
        console.log(userInfo);

        fetchUserGames(userInfo.id, (userGames) => {
            console.log(userGames);
        });
    });
}

run();*/

/*function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //fetch
            const data = { id: 1, name: 'Alex'};

            resolve(data);
        }, 1000);
    });
}

function fetchUserGames(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //fetch
            const data = ['game1', 'game2'];
            reject("Error 2");
        })
    })
}

function run() {
    fetchUserData()
        .then((userData) => {
            return fetchUserGames(userData.id);
        })
        .then((userGames) => {
            console.log(userGames);
        })
        .catch((message) => {
            console.log(message);
        })
        .finally(() => {
            console.log('Promise completed');
        });
}

run();*/

/*
function fetchGames() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataFromServer = 'sdadadadada';
            /!*const gamesFromServer = [
                { id: 1, name: 'Человек паук' },
                { id: 2, name: 'CSGO' }
            ];*!/

            if (Array.isArray(dataFromServer)) {
                resolve(gamesFromServer);
            } else {
                reject("Error");
            }
        }, 2000);
    });
}

function renderLoading() {
    /!*const body = document.querySelector('body');
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.textContent = 'Loading...';

    body.append(loading);*!/
}

function renderGames(games) {
    /!*const body = document.querySelector('body');

    const loading = document.querySelector('#loading');
    loading.remove();

    games.forEach((game) => {
        const gameElement = document.createElement('div');
        gameElement.innerText = `Game ${game.name}`;
        gameElement.className = 'game-element';

        body.append(gameElement);
    })*!/
}

renderLoading();

fetchGames()
    .then((games) => {
        renderGames(games);
    })
    .catch((message) => {
        console.log(message);
    });
*/

/*function fetchVideo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //fetch
            const data = ['video1', 'video2'];
            console.log('Video received');
            resolve(data);
        }, 1000)
    })
}

function fetchShorts(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //fetch
            const data = ['shorts1', 'shorts2'];
            console.log('Shorts received');
            reject('Error');
        }, 2000)
    })
}

function main() {
    console.log('Loading');

    /!*Promise.all([fetchVideo(), fetchShorts()])
        .then((data) => {
            console.log(data);
        })
        .catch((message) => {
            console.log('Error', message);
        });*!/

   /!* Promise.allSettled([fetchVideo(), fetchShorts()])
        .then((data) => {
            console.log('OK', data);
        })
        .catch((message) => {
            console.log('Error', message);
        });*!/

    /!*Promise.any([fetchVideo(), fetchShorts()])
        .then((data) => {
            console.log('OK', data);
        })
        .catch((message) => {
            console.log('Error', message);
        });*!/

    Promise.race([fetchVideo(), fetchShorts()])
        .then((data) => {
            console.log('OK', data);
        })
        .catch((message) => {
            console.log('Error', message);
        });
}

main();*/

// Promise.all - ждем все промисы, если хоть один с ошибок - catch, иначе then
// Promise.allSettled - просто ждем выполнения всех промисов (всегда then)
// Promise.race - получаем первый выполнившийся промис (если он был с ошибкой - catch, иначе then)
// Promise.any - получаем первый УСПЕШНО выполнившийся промис

//Promise.all, Promise.allSettled - возвращают массив
//Promise.race, Promise.any - возвращают один элемент


// запрос всех видео

function fetchAllVideo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //fetch
            const videos = [
                { id: 1, title: 'Топ 10 игр 2024' },
                { id: 2, title: 'Влог гуляем в Киеве' },
                { id: 3, title: 'Чем кормить кошек' }
            ];
            console.log('Видео получены');
            resolve(videos);
        }, 1000)
    });
}

// витащить описание этого видео

function fetchDescriptionVideo(videoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const description = {
                id: 1,
                title: 'Топ 10 игр 2024',
                hashTag: ['игры', '2024'],
                authorId: 55
            };
            console.log('Описание видео получено')
            resolve(description);
        }, 1000);
    })
}

// в описании указан автор, нужно запросить информацию по нему

function fetchAuthor(authorId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const author = {
                id: 55,
                name: 'IT JS',
                videoId: [1, 2, 3],
                shortsId: 55
            };
            console.log('Автор получен')
            resolve(author);
        }, 1000);
    });
}

function fetchAuthorShorts(authorId, shortsId) {
    return new Promise((resolve) => {
        // fetch(authorId, shortsId)

        setTimeout(() => {
            console.log('Шортс получен');
            resolve('Как готовить яичницу');
        }, 500);
    });
}

fetchAllVideo()
    .then((videos) => {
        console.log(videos);
        return fetchDescriptionVideo(videos[0].id);
    })
    .then((videoDescription) => {
        console.log(videoDescription);
        return fetchAuthor(videoDescription.authorId);
    })
    .then((author) => {
        console.log(author);
        return fetchAuthorShorts(author.id, author.shortsId[1])
    })
    .then((shortVideo) => {
        console.log('Название шортса: ', shortVideo)
    })
    .catch((message) => {
        console.error('Что-то пошло не так: ', message);
    });
