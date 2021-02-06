const api = require("./api")

let nota1 = parseFloat(process.argv[2])
let nota2 = parseFloat(process.argv[3])

let resultado = api.media(nota1,nota2)

if(resultado){
    console.log("Aluno aprovado")
}else{
    console.log("Aluno reprovado")
}
    