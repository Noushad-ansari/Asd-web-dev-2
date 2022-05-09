let car = {
  name : "ford",
  model : {a :"hi"},
  start : function () {
    console.log("Start car")
    return "start car"
  }
}
console.log(car.model.a)
// console.log(car.start())
// console.log(car.name,car.model)
// console.log(car["name"])  // not recommended


// console.log(this)

// what is the difference betweeb document and window object

// console.log(document) // document is a web page
console.log(window.document.body)  // window is a global object
// window.alert("hello")
// alert("bye")


// what is the difference between undefined and is not defined


// undefined is a datatype itself

// let a = 5
// let a =  undefined
// console.log(a)