function adElement(){

    var divNova = document.createElement("div")
    var conteudoNovo = document.createTextNode("Olá meus cumprimentos!")
    divNova.appendChild(conteudoNovo)
    var divAtual = document.getElementById("div1")
    document.body.insertBefore(divNova,divAtual)

}

var b = document.querySelector("button")
b.setAttribute("disabled", "disabled")

//document.body.onload = adElement()

var bod = document.getElementById("boy")
var filho = document.getElementById("div1")
var remove = bod.removeChild(filho)

var removeAll = document.getElementById("pai")
while(removeAll.firstChild){
    removeAll.removeChild(removeAll.firstChild)
}