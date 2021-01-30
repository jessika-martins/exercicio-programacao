// service
function montante(p, num) {
    return ((p / 100) * num) + num
}

// service
function juros(p, num) {
    let resultado = montante(p, num)
    return resultado - num
}

// controller
function sinopse(p, num) {
    return {
        montante: montante(p, num),
        juros: juros(p, num)
    }
}

module.exports = { montante, juros, sinopse }
