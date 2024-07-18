function fetchUserInfo(callback) {
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

run();
