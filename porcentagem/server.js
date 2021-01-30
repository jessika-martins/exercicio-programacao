const express = require('express');
const porcentagem = require("./porcentagem");

const app = express();
const port = 3000;

//
// http://localhost:3000/montante?p=2&num=1200
//
app.get('/montante?', (req, res) => {

    let p = parseFloat(req.query.p, 10)
    let num = parseFloat(req.query.num, 10)

    res.send({
        resultado: porcentagem.montante(p, num)
    });
})

//
// http://localhost:3000/juros?p=2&num=1200
//
app.get('/juros?', (req, res) => {

    let p = parseFloat(req.query.p, 10)
    let num = parseFloat(req.query.num, 10)

    res.send({
        resultado: porcentagem.juros(p, num)
    });
})

//
// http://localhost:3000/porcentagem?p=2&num=1200
//
app.get('/porcentagem?', (req, res) => {

    let p = parseFloat(req.query.p, 10)
    let num = parseFloat(req.query.num, 10)

    res.send({
        montante: porcentagem.montante(p, num),
        juros: porcentagem.juros(p, num)
    });

})

//
// http://localhost:3000/sinopse?p=2&num=1200
//
app.get('/sinopse?', (req, res) => {

    let p = parseFloat(req.query.p, 10)
    let num = parseFloat(req.query.num, 10)

    res.send(porcentagem.sinopse(p, num));

})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})