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

function run() {
    console.log('test');
    const data = new Promise((resolve, reject) => {
        console.log('test4');
        setTimeout(() => {
            //fetch
            const data = { id: 1, name: 'Alex'};

            console.log('test');
            resolve(data);
            console.log('test6');
        }, 1000);
    });

    console.log('test2');

    data.then((userData) => {
        console.log(userData);
        console.log('test7');
    });

    console.log('test3');
}

run();