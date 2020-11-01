const operacoes = require("./app.js");

let resultado = undefined;

resultado = operacoes.adicionar(10, 2);
msg = "O total de 10 + 2 = " + resultado;
console.log(msg);

resultado = operacoes.subtrair(10, 2);
msg = "O total de 10 - 2 = " + resultado;
console.log(msg);

