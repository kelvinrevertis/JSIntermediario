function show(){
    let element = document.getElementById("name")
    console.log(element.value)//exibe o valor que está no id "nome"
    let elements = document.getElementsByName("phone")
    console.log(elements[0].value)
    let elemento = document.querySelectorAll("div#phones input[name= 'phone']")
    console.log(elemento[1].value)
    let elementos = document.getElementsByTagName("input")
    console.log(elementos)
}