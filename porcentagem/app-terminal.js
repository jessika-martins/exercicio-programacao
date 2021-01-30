const app = require("./app")

// entrada
let porcentagem = parseFloat(process.argv[2], 10)
let valor = parseFloat(process.argv[3], 10)

// processamento
let montante = app.montante(porcentagem, valor)
let juros = app.juros(porcentagem, valor)

// saída
console.log(`O valor total a ser pago é ${montante}`)
console.log(`O valor total de juros a ser pago é ${juros.toFixed(2)}`)