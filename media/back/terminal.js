const api = require("./api")
const mediaTotal = require("./api")

let nota1 = parseFloat(process.argv[2])
let nota2 = parseFloat(process.argv[3])

let resultado = api.media(nota1,nota2)
let media = api.mediaTotal(nota1,nota2)
if(resultado){
    console.log(`Aluno aprovado, sua nota é ${media}`)
}else{
    console.log(`Aluno aprovado, sua nota é ${media}`)
}


    