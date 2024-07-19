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

function fetchUserData() {
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
            resolve(data);
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
        });
}

run();