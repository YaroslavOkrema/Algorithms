/*
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return await response.json();
}

Promise.all([getPosts(), getUsers(), getComments()]).then(results => {
    console.log(results);
});*/


const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error in promise2');
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    });

    /*
    [
     { status: "fulfilled", value: 10 },
     { status: "rejected", reason: "Error in promise2" },
     { status: "fulfilled", value: 30 }
    ]
    */

const promise4 = new Promise((_, reject) => setTimeout(() => reject("Error in promise4"), 2000));
const promise5 = new Promise((_, reject) => setTimeout(() => reject("5"), 1000));
const promise6 = new Promise((_, reject) => setTimeout(() => reject("Error in promise6"), 3000));

Promise.race([promise4, promise5])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

Promise.any([promise4, promise5, promise6])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });