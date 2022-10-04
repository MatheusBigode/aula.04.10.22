function Verificar() {
    var numero = Number(document.getElementById("numero").value)

    if(numero == 0){
        document.getElementById("res").innerHTML = "Seu número é 0!"
    } else {
        if(numero > 0) {
        document.getElementById("res").innerHTML = "Seu número é natural!"
        } else {
        document.getElementById("res").innerHTML = "Seu número é negativo!"
        }
       
    }
}
