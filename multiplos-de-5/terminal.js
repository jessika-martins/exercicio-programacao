const calc = require("./calc");

// entrada
let valor = parseFloat(process.argv[2], 10);

// processamento
let resultado = calc.multiplos_de_5(valor)

// saída
if (resultado) {
    console.log("É multiplo de 5")
} else {
    console.log("Não é multiplo de 5")
}
