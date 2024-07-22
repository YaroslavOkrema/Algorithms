// fetch, axios, XMLHttpRequest
// methods: GET, POST, DELETE, PUT
// status: 200, 500, 404
// body,
// api
// network, 3G

// https://jsonplaceholder.typicode.com/posts

const newPost = {
    "userId": 1,
    "id": 77777777777,
    "title": "hello",
    "body": "how are u"
}

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.450001&lon=34.983334&appid=642c1ad128fd816bcb4ea30d07064974&units=metric';
fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((info) => {
        renderWeather(info);
    })

function renderWeather(data) {
    const div = document.createElement('div');
    div.textContent = `
        Температура: ${data.main.temp}
        Місто: ${data.name}
    `;

    document.body.append(div);
}
