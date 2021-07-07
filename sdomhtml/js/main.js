
let killers = ["jason", "fredy", "chuky"]

let body = document.querySelector("body")
let uList = document.createElement("ul")

body.appendChild(uList)

let uListSelection = document.querySelector("ul")

killers.forEach(element =>{
    let list = document.createElement("li")
    uListSelection.appendChild(list).textContent = element
})