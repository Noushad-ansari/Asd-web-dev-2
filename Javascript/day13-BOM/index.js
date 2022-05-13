// setTimeout(()=>{
//     greet()
// },5000)

// function greet(){
//     console.log("hello bro good morning")
// }

// setInterval(() => {
//     console.log("setInternval")
// }, 1000);



function register(cb) {
   setTimeout(() => {
    console.log("register")
    cb()
   }, 2000);
}
function login(cb) {
   setTimeout(() => {
    console.log("login")
    cb()
   }, 1000);
}
function displayUser(cb) {
  setTimeout(() => {
    console.log("displayUser")
    cb()
  }, 4000);
}
function editUser() {
    console.log("editUser")

}

// callback hell

register(function () {
    login(function () {
        displayUser(function () {
            editUser()
        })
    })
})