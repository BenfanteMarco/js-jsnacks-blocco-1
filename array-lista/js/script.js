
let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(fridge);

let peach = "pesca";
let flag = false;

let list = document.querySelector("ul");
const add = document.getElementById("add-fruit");

let founded = document.querySelector("h5");
const verify = document.getElementById("verify-fruit");


for(let i = 0; i<fridge.length; i++){
    list.innerHTML += `<li>${fridge[i]}</li>`;
}

add.addEventListener("click", function(){
    fridge.push(peach);
    console.log(fridge);

    list.innerHTML = "";
    for(let i = 0; i<fridge.length; i++){
        list.innerHTML += `<li>${fridge[i]}</li>`;
    }
})


verify.addEventListener("click", function(){
    for(let i = 0; i<fridge.length; i++){

        if("cocomero" == fridge[i]){
            flag = true
        }
    }

    if(flag){
        founded.innerText += "Trovato! Devo solo preparare il cocktail."
    }
    else{
        founded.innerText += "Oh no, devo uscire a comprare il cocomero!"
    }

    console.log(founded.innerText);
})
