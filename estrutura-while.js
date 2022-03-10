function actionB() {

    var idade, limite, contador

    limite = prompt("Digite a qntd: ")
    contador = 0
    while (contador < limite) {
        idade = prompt("Digite a idade para verify: ")
        if (idade > 18)
            // document.getElementById("paragraph").innerText = "vc eh maior de idade!"
            alert("DALE NA VODKA")
        else
            // document.getElementById("paragraph").innerText = "vc eh menor de idade!"
            alert("VAI FICAR EM CASA SEU GAY")
        contador++
    }
}


