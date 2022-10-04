

function VerificarSexo () {
    var sexo = document.getElementById("sexo").value

    if(sexo == "F") {
        document.getElementById("res").innerHTML = "Você é uma mulher!"
    } else if(sexo == "M") {
        document.getElementById("res").innerHTML = "Você é um homem!"
    } else {
        document.getElementById("res").innerHTML = "Sexo inválido."
    }
}


/*
var sexo = ""

if (sexo == "F") {
    console.log("Mulher")
} else if (sexo == "M") {
    console.log("Homem")
} else {
    console.log("Inválido")
}
*/