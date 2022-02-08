class App{
    addProperty(){

        event.preventDefault()
        let type = document.querySelector("select[name='type']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked

        let property = new Property(type, area, rented)

        this.addOnPropertyList(property)

        this.cleanForm()
    }

    addOnPropertyList(property){
        let listElement = document.createElement("li")
        let propertyInfo = "Tipo: "+ property.type+" Area: "+ property.area

        if (property.rented){
            let mark = this.createMark()
            listElement.appendChild(mark)
        }

        listElement.innerHTML += propertyInfo
        let buttonRemove = this.createRemoveButton()
        listElement.appendChild(buttonRemove)
        document.getElementById("house-list").appendChild(listElement)

    }

    createMark(){
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "Alugado"

        return rentedMark
    }

    createRemoveButton(){

        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick","app.remove()")
        buttonToRemove.innerText = "Remove"
        return buttonToRemove
    }

    cleanForm(){
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("house-list").removeChild(liToRemove)
    }
    
}