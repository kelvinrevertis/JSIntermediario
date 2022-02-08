function savePlayer(){
    let name = document.querySelector("input[name='name']").value
    let level = document.querySelector("input[name='level']").value

    let newTableValue = document.createElement("td")
    newTableValue.innerText = "Player: "+ name + " - Level: "+ level+" "

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick","removePlayer(this)")

    newTableValue.appendChild(removeButton)

    document.getElementById("player-list").appendChild(newTableValue)

}

function removePlayer(button){
    let tableToRemove = button.parentNode
    document.getElementById("player-list").removeChild(tableToRemove)

}