function Verificar() {
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)

    if (num1 > num2) {
        document.getElementById("res").innerHTML = `O maior número é o ${num1}!`
    } else {
        document.getElementById("res").innerHTML = `O maior número é o ${num2}!`

    }

    
}