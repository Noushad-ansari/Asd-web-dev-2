// console.log("hello")
// console.log("bye")

// function greet() {
//     console.log("good morning")
// }



// setTimeout(() => {
//     console.log("i am set Time out")
// }, 3000);


// console.log("going to mumbai")
// greet()



let myPromise = new Promise((resolve, reject) => {
    // resolve("programm successFull")
    let rain = "raining"
    if (rain == "raining") {
        resolve("hurray! i will not go to school mission passed")
    } else {
        reject("i am sad its raining i have to go to school ")
    }
})

console.log(myPromise)

myPromise
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })