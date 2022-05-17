// callback is a function that is passed as a argument inside another function is know as a callback function

// function sum (a,b){

//     let c = a+b
//     return c
// }
// function sub (a,b){

//     let c = a-b
//     return c
// }
// function mul (a,b){

//     let c = a*b
//     return c
// }
// function div (a,b){

//     let c = a/b
//     return c
// }

// // console.log(sum(2,7))


// function calc(cb) {
//    console.log(cb(14,6))
// }

// calc(mul)




// function takeFiveSeconds() {
//     let ms = 5000 + new Date().getTime()
//     while (new Date < ms) {
//         // console.log("please wait i will take  five seconds")
//     }
// }


// function register(callback) {
//     // setTimeout(() => {

//     //     console.log("register")
//     // }, 2000);
//     setTimeout(() => {
//         console.log("Register")
//         callback()
//     }, 3000);
// }

// function login(callback) {
//     // setTimeout(() => {

//     //     console.log("login")
//     // }, 1000);
//     setTimeout(() => {
//         console.log("login")
//         callback()
//     }, 3000);
// }

// function getUserData(callback) {
//     setTimeout(() => {

//         console.log("getUser")
//     }, 3000);
//     // setTimeout(() => {
//     //     console.log("Get user Data")
//     //     callback()
//     // }, 4000);
// }


// register(()=>{
//     login(()=>{

//         getUserData()
//     })
// })




// function displayUserData(cb) {
//     setTimeout(() => {
//         console.log("displayed user data")
//         cb()
//     }, 1000);
// }
// function editUserData() {
//     setTimeout(() => {
//         console.log("Editing user data")
//     }, 1000);
// }


// console.log("Other task")


// callback hell
// register(function () {
//     login(function () {
//         getUserData(function () {
//             displayUserData(function () {
//                 editUserData()
//             })
//         })
//     })
// })




function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register")
            resolve()
        }, 1000);
    })

}



function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            reject("getting error while login")
            console.log("login")
            // reject()
        }, 1000);
    })
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getuser data")
            resolve()
        }, 1000);
    })
}

function displayUserData() {
    setTimeout(() => {
        console.log("displayed data")
    }, 1000);
}


// register()
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => { console.log(console.log(err)) })



async function authenticate() {
  try{
    await register()
    await  login()
    await  getUserData()
    await displayUserData()
  }catch(error){
console.log(error + "bye")
  }
  throw "authenctication is not working perfect"
}

authenticate()
.then(() => { console.log("executed") })
.catch((err)=>console.log(err + "hello"))


// callback hell
// register(function() {
//     login(function() {
//         getUserData(function() {
//             displayUserData()

//         })
//     })
// })

// register()
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => { console.log(err) })

// async function authentication() {

//     try {
//         await register()
//         await login()
//         await getUserData()
//         await displayUserData()
//     } catch (error) {
//         console.log(error)
//         // throw new Error()
//     }
//     // console.log("authentication")
// }



// authentication().then(() => { console.log("everything is set") }).catch((err) => { console.log(err) })