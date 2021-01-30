const express = require('express');
const calc = require("./calc");

const app = express();
const port = 3000;

app.get('/multiplo-de-5-a?', (req, res) => {

    let num = parseInt(req.query.num, 10)

    res.send({
        resultado: calc.multiplos_de_5(num)
    });
})

app.get('/multiplo-de-5-b?', (req, res) => {

    let num = parseInt(req.query.num, 10)

    res.send({
        valor: num,
        heMultiplo: calc.multiplos_de_5(num)
    });
})

app.get('/multiplo-de-5-c?', (req, res) => {
    let num = parseInt(req.query.num, 10)
    let resultado = calc.multiplos_de_5(num)

    if (resultado) {
        res.send({ resultado: "É multiplo de 5" });
    } else {
        res.send({ resultado: "Não é multiplo de 5" });
    }
})

app.get('/multiplo-de-5-d?', (req, res) => {
    let num = parseInt(req.query.num, 10)
    let resultado = calc.forma_d(num)
    res.send(resultado);
})

app.get('/multiplo-de-5-e?', (req, res) => {
    let num = parseInt(req.query.num, 10)
    let resultado = calc.forma_e(num)
    res.send(resultado);
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})