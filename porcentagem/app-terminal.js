const app = require ("./app")
const appj = require("./app-juros")

let a = parseFloat(process.argv[2], 10)
let b = parseFloat(process.argv[3], 10)


resultado = app.valor(a,b)
resultadoT = appj.juros(a,b)

console.log(`O valor total a ser pago é ${resultado}`)
console.log(`O valor total de juros a ser pago é ${resultadoT.toFixed(2)}`)