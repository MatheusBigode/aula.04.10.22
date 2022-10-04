//-----------------------------ATIVIDADE 1------------------------------
   

function CalcMédia () {
    var av1 = Number(document.getElementById("av1").value)
    var av2 = Number(document.getElementById("av2").value)

    var media = (av1 + av2)/ 2


    if (media > 6) {
        document.getElementById("resultado").innerHTML = "O aluno(a) está aprovad(a)!"
    } else {
        document.getElementById("resultado").innerHTML = "O aluno(a) foi convocado(a) para o exame."
    }

    
}

function CalcMédiaFinal () {
    var av1 = Number(document.getElementById("av1").value)
    var av2 = Number(document.getElementById("av2").value)

    var media = (av1 + av2)/ 2

    var notaexame = Number(document.getElementById("notaexame").value)
    var exame = (media + notaexame)/2

    if (exame >= 6){
        document.getElementById("resultadofinal").innerHTML = "O aluno(a) está aprovado(a)!"
    } else {
        document.getElementById("resultadofinal").innerHTML = "O aluno(a) está reprovado(a)."

    }
    
}

function LimparMédia() {
    av1 = ("")
    av2 = ("")
    resultado = ("")

    var limpav1 = document.getElementById("av1").value = limpav1
    var limpav2 = document.getElementById("av2").value = limpav2
    var limpresp = document.getElementById("resultado").innerHTML = " "
    var limpexame = document.getElementById("notaexame").value = limpexame
    var limpresp = document.getElementById("resultadofinal").innerHTML = " "


}