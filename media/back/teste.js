const api = require("./api")
const mediaTotal = require("./api")

let resultado = api.media(50,100)
let resultado2 = api.media(50,10)
let resultado3 = api.media(50,50)
let resultado4 = api.media(49.5,50.2)


let resultadoT = api.mediaTotal(50,100)
let resultadoT1 = api.mediaTotal(10,5)

console.log(resultado == true)
console.log(resultado2 == true)
console.log(resultado3 == true)
console.log(resultado4 == true)

console.log(resultadoT == 75)
console.log(resultadoT1 == 50)