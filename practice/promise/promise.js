function fetchUserInfo(callback) {
    setTimeout(() => {
        // fetch
        const data = { id: 1, name: 'Alex'};
        callback(data);
    }, 1000);
}

function run() {
    fetchUserInfo((userInfo) => {
        console.log(userInfo);
    });
}

run();
