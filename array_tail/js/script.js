
let userArray = []

let question = parseInt(prompt("Quanti elementi contiene il tuo array?"))
console.log(question)

let show = document.getElementById("show");
let num = document.getElementById("num");

const elements = document.querySelector("h5");

for(let i = 1; i<=question; i++){
    userArray.push(Math.floor(Math.random() * 100))
}
console.log(userArray)

let numElements;

show.addEventListener("click", function(){
    elements.innerText = ""
    num.innerText = ""

    numElements = parseInt(prompt("Quanti elementi vuoi visualizzare?"))
    let showElements = userArray.slice(`-${numElements}`)
    if(numElements > userArray.length){
        alert(`Il tuo array contiene ${userArray.length} elementi, non posso mostrare ${numElements} elementi.`)
    }
    else if(numElements <= userArray.length){
        elements.innerText += showElements
        num.innerText += `Stai visualizzando gli ultimi ${numElements} elementi del tuo array!`
    }
})