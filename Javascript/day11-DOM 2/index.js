let input = document.querySelector("#input")



let ul = document.querySelector("#list")

let addTask =  document.querySelector("#addTask")

addTask.addEventListener("click",function () {
 let inputValue = input.value
 console.log(inputValue)

 let ul =  document.querySelector("#list")

 let li =  document.createElement("li")
 li.textContent =  inputValue
li.className = "mt-3"

 let updateBtn =  document.createElement("button")
 updateBtn.textContent = "UPDATE"
 updateBtn.id = "update"
 //  updateBtn.style.cssText = "background : yellow;margin-left: 10px;"
 
 updateBtn.className = "btn btn-primary ml-2"
 
 let deleteBtn =  document.createElement("button")
 deleteBtn.textContent = "DELETE"
 //  deleteBtn.style.cssText = "background : red;margin-left: 10px;"
 deleteBtn.className = "btn btn-danger ml-2"
 updateBtn.id = "delete"



li.appendChild(updateBtn)
li.appendChild(deleteBtn)

 ul.appendChild(li)
 input.value = ''

})

