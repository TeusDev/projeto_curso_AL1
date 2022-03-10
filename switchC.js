function actionB() {
    var v1, v2, opr, res;

    v1 = prompt("Digite v1: ")
    opr = prompt("Escolha a opr: + , - , * , /")
    v2 = prompt("Digite v2: ")

    v1 = parseInt(v1)
    v2 = parseInt(v2)

    switch (opr) {
        case "+":
            res = v1 + v2
            break;
        case "-":
            res = v1 - v2
            break;
        case "*":
            res = v1 * v2
            break;
        case "/":
            res = v1 / v2
            break;
        default:
            res = "OPR NOT SUPPORTED"
    }

    document.getElementById("paragraph").innerText = "Res: " + res
}