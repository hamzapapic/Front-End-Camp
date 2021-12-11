// handler = (cifra,id) => {
//     x = document.getElementById("broj")
//     x.innerText += parseInt(x.innerText) + cifra
//     return document.getElementById(id);
// }
// y = handler()
// y.addEventListener("click",() => {
//     handler()
// })

const fruits = ["mango","kiwi","apple","tomato"]
for(i of fruits){
    x = document.createElement("li")
    x.innerText = i
    document.getElementById("lista").appendChild(x)
}
console.log(document.getElementById("lista"));


