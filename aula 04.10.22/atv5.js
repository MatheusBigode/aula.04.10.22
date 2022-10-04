function Classificar() {
    var idade = Number(document.getElementById("idade").value)

    if (idade <= 10) {
        document.getElementById("class").innerHTML = "Classificação: Infantil"
    } else if (idade > 10 && idade <= 13){
        document.getElementById("class").innerHTML = "Classificação: Infanto Juvenil"
    } else if (idade >= 14 && idade <= 18){
        document.getElementById("class").innerHTML = "Classificação: Juvenil"
    } else {
        document.getElementById("class").innerHTML = "Classificação: Adulto"
    }
}