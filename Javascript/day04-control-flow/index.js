
// let age = 15


// if (age >= 18) {
//     console.log("you are elegible to vote because you are " + age)
// } else {
//     console.log("Sorry ! champ you are not elegible " + age)
// }

// let amount = 100
// if (amount >= 20) {
//     console.log("you can buy iceCream")
// } else {
//     console.log("Sorry !  you can not buy iceCream")

// }

// let rain = true

// if (!rain) {
//     console.log("Oh! it is raining")
// } else {
//     console.log(" it is not raining")
// }


// if-else-if

// check if the Number if positive, negative or zero

// let userNumber = prompt("Enter A Number")  
// console.log(typeof(userNumber))


// if (userNumber > 0) {
//     console.log(userNumber + " is positive")
//     document.write(userNumber + " is positive")
// } else if(userNumber === 0) {
//     console.log(userNumber + " is Zero")
//     document.write(userNumber + " is zero")
// }else{
//     console.log(userNumber + " is negative")
//     document.write(userNumber + " is negative")

// }


// let userName =(prompt("enter User Name")) 

// if (userName === "Aditya" || userName === "ADITYA" || userName === "aditya" || userName === "adiTya") {
//     console.log("hello "+ userName + " you are Software Engineer")
// }
// else if(userName === "rahul"){
//     console.log("hello "+ userName + " you are CA")
// }else if(userName === "dinesh"){
//     console.log("hello "+ userName + " you are advocate")
// }else if(userName === "jaspreet"){
//     console.log("hello "+ userName + " you are Teacher")
    
// } else{
//     console.log("hello "+ userName + "you are nothing")
// }

let userName = prompt("Enter your Name")

switch(userName) {
    case "Aditya":  {
        console.log("hello " + userName + " you are a SE engineer")
        break;
    }
    case "dinesh":  {
        console.log("hello " + userName + " you are a CA ")
        break;
    }
    case "Rahul":  {
        console.log("hello " + userName + " you are a Teacher ")
        break;
    }
  
    
    default:{
        console.log("Hello "+ userName+ "  your are Nothing " )

    }

   
}