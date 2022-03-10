function actionB() {
    var outloop, v1, v2
    do {
        v1 = prompt("valor de v1:")
        v2 = prompt("valor de v2:")

        document.getElementById("paragraph").innerText = "valores v1 + v2: " + (parseInt(v1) + parseInt(v2))

        outloop = prompt("Continuar? S/N")

    } while (outloop == ("N" || "n"))
}