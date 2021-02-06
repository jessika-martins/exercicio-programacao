const express = require('express')
const api = require("./api")

const app = express();
const port = 3000;

// http://localhost:3000/media?num1=50&num2=100

app.get('/media', (req,res) =>{
    let num1 = parseFloat(req.query.num1, 10)
    let num2 = parseFloat(req.query.num2, 10)

    res.send({
        resultado: api.media(num1,num2)
    })
})

app.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})