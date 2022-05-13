let myButton = document.querySelector("#myButton")
console.log(myButton)

// myButton.addEventListener("click",function () {
//     box1()
//     box2()
//     box3()
//     box4()
//     box5()
//     box6()
//     box7()
//     box8()
//     box9()
//     box10()
// })

setInterval(() => {
    box1()
    box2()
    box3()
    box4()
    box5()
    box6()
    box7()
    box8()
    box9()
    box10()
}, 300);

function box1(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
    console.log(x)
    console.log(y)
    console.log(z)
    let box1 = document.querySelector("#box1")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box1.style.background = bgColor
    // box1.style.cssText = "background : red"

    box1.innerHTML =bgColor
}

function box2(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
 
    let box2 = document.querySelector("#box2")

    let bgColor = `rgb(${x},${y},${z})`
    box2.style.background = bgColor
  

    box2.innerHTML =bgColor
}
function box3(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
   
    let box3 = document.querySelector("#box3")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box3.style.background = bgColor
    // box1.style.cssText = "background : red"

    box3.innerHTML =bgColor
}
function box4(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
   
    let box4 = document.querySelector("#box4")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box4.style.background = bgColor
    // box1.style.cssText = "background : red"

    box4.innerHTML =bgColor
}
function box5(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
    
    let box5 = document.querySelector("#box5")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box5.style.background = bgColor
    // box1.style.cssText = "background : red"

    box5.innerHTML =bgColor
}
function box6(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
    
    let box6 = document.querySelector("#box6")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box6.style.background = bgColor
    // box1.style.cssText = "background : red"

    box6.innerHTML =bgColor
}
function box7(){
    let x =Math.round( Math.random() * 256)
    let y =Math.round( Math.random() * 256)
    let z =Math.round( Math.random() * 256)
    console.log(x)
    console.log(y)
    console.log(z)
    let box7 = document.querySelector("#box7")
    // box1.style.background = "rgb(244,205,3)"
    let bgColor = `rgb(${x},${y},${z})`
    box7.style.background = bgColor
    // box1.style.cssText = "background : red"

    box7.innerHTML =bgColor
}
