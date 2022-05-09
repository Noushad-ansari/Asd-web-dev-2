let para = document.getElementById("message")
let heading = document.getElementsByTagName("h2")
let pargraph = document.getElementsByClassName("para")
// console.log(heading)
// console.log(para)
// console.log(pargraph)
// console.log( heading[2].innerHTML)
// console.log(heading[3].innerText)
// for (let i = 0; i < heading.length; i++) {
//     heading[2].innerText = "byee"

// }

// querySelector or CSS selector

// let message = document.querySelector("#message")
// console.log(message)

// let p = document.querySelector(".para")
// console.log(p)

// let h2 = document.querySelectorAll("h2")
// console.log(h2[2].innerHTML)



// let note = document.querySelector('.note');
// console.log(note.parentNode.innerText);

let div = document.createElement("div")
div.innerText = "hello"
// div.innerHTML = "<h1>hello</h1>"
// div.textContent = "<h1>hello</h1>"
div.id = 'container'
div.className = 'container';
// console.log(div)

document.body.appendChild(div);

let subHeading = document.createElement("h2")
subHeading.textContent = "Sub Heading"

div.appendChild(subHeading)


function addElement() {
    let h1 = document.createElement("h1")
    h1.textContent = "Hello there"

    document.body.appendChild(h1)
}

// let menu = document.getElementById('menu');
// // create a new li node
// let li = document.createElement('li');
// li.textContent = 'Home';

// // insert a new node before the first list item
// menu.insertBefore(li, menu.firstElementChild);


// function insertAfter(newNode, existingNode) {
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }

// let menu = document.getElementById('menu');
// // create a new li node
// let li = document.createElement('li');
// li.textContent = 'Services';
// insertAfter(li,  menu.lastElementChild);


// let app = document.querySelector('#app');



// app.append(...nodes);


// let menu = document.querySelector('#menu');
// let clonedMenu = menu.cloneNode(true);
// console.log(clonedMenu)
// clonedMenu.id = 'newMenu';
// document.body.appendChild(clonedMenu);

// let menu = document.querySelector('#menu');
// menu.style.background = "grey"
// menu.style.padding = "50px"
// menu.style.color = "orange"
// menu.style.fontSize = "50px"


// menu.style["background-color"] = "red"  //  xxx
// menu.style.cssText = 'color:red;background-color:yellow;font-size: 20px';

// let image = document.createElement("img")
// image.setAttribute("src", "imgagekjdaf;aksd")
// let src = image.getAttribute(src);
// console.log(Src)



// let nodes = langs.map(lang => {
//     let li = document.createElement('li');
//     li.textContent = lang;
//     return li;
// });

let langs = ['TypeScript', 'HTML', 'CSS'];
let li = []
for (let i = 0; i < langs.length; i++) {
    li = document.createElement("li")
    // li[0].innerHTML = langs[i]  //Not allowed 
        li.innerHTML = langs[i]
    console.log(li.innerHTML)
    document.body.appendChild(li)
}
// as we are a creating a single element in every iteration but we were trying to add innerHTML  using index of li element which is not there this cause Uncaught TypeError: Cannot set properties of undefined (setting 'innerHTML')"