const pessoa = require ("./app");

let nome = pessoa.nome("Jessika");
let nomeCompleto = pessoa.sobrenome(nome);

console.log(nomeCompleto);