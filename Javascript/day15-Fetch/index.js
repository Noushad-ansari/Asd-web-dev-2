
let ul = document.querySelector("#users")
// console.log(usersContainer)


fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
    // console.log(users[4].email + " " +users[4].name)
    for (let i = 0; i < users.length; i++) {
        let li = document.createElement("li")
        li.textContent = users[i].name
        // console.log(users[i].name)
       ul.appendChild(li)
    }
    })
    .catch((err) => console.log(err))