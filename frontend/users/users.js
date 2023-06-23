const apiBaseUrl = "http://localhost:3000/users"

let locationPage = () => {
    fetch(apiBaseUrl)
        .then(res => res.json())
        .then(function (data) {
            appendData(data)
        })
        .catch((err) => {
            console.log(err)
        })
}