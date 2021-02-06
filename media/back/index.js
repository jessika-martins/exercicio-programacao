//Requisição api e classe
const api = require ("./api")
const aluno = require ("./alunos-class")

// Inserção dos dados na classe Aluno
const Aluno1 = new aluno("Joao",123,50,100);
 

console.log(Aluno1)

console.log(api.media(Aluno1.nota1, Aluno1.nota2))