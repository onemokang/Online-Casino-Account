const apiBaseUrl = "http://localhost:3000/users"

// GET
let mainPageGet = () => {
    fetch(apiBaseUrl)
        .then(res => res.json())
        .then(function (data) {
            appendData(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
mainPageGet();

function appendData(data) {
    let mainContainer = document.getElementById('main');
    let user = document.createElement('div');
    // user.className = 'container mt-5'

    let name = document.createElement("h2");
    name.innerText = data.name;
    user.appendChild(name);
    document.getElementById('name').value = data.name;

    mainContainer.appendChild(user);
}