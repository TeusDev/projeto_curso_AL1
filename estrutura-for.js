function actionB() {
    var fatorial, num

    num = prompt("Digite o num:")
    fatorial = 1
    for (var contador = 1; contador <= num; contador++) {
        fatorial = fatorial * contador
    }

    document.getElementById("paragraph").innerText = "O fatorial de " + num + " eh: " + fatorial
}