function actionB() {
    var resultado, v1, v2, opr, res;

    v1 = prompt("Digite v1: ")
    opr = prompt("Escolha a opr: + , - , * , /")
    v2 = prompt("Digite v2: ")

    v1 = parseInt(v1)
    v2 = parseInt(v2)

    if (opr == "+") {
        //
        res = v1 + v2
    }
    else if (opr == "-") {
        res = v1 - v2
    } else if (opr == "*") {
        res = v1 * v2
    } else if (opr == "/") {
        res = v1 / v2
    } else {
        res = "THIS OPR IS NOT SUPPORTED!!!"
    }

    document.getElementById("paragraph").innerText = "Res: " + res
}