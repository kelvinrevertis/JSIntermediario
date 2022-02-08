function savePlayer(){
    let name = document.querySelector("input[name='name']").value //pega o valor do html no input text name
    let level = document.querySelector("input[name='level']").value
    let power = document.querySelector("input[name='power']").value

    let newListValue = document.createElement("li") // cria uma variavel com um LI
    newListValue.innerText = "Player: "+ name + "\nNivel: "+ level +"\nPower: "+ power + "\n" // imprime todos os dados coletados

  let removeButton = document.createElement("button")//cria um button
    removeButton.type = "button"//seta o tipo pra button
    removeButton.innerText= "Remover"//o texto escrito vira "Remover"
    removeButton.setAttribute("onclick","removePlayer(this)")//coloca o onclick com função

    newListValue.appendChild(removeButton)// liga o removeButton como filho do newListValue

    document.getElementById("player-list").appendChild(newListValue)// liga o newListValue como filho da lista com id"player-list"
}

function removePlayer(button){
    let liToRemove = button.parentNode
    document.getElementById("player-list").removeChild(liToRemove)

}