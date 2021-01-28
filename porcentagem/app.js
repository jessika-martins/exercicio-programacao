function montante(p, num) {
    return ((p / 100) * num) + num
}

function juros(p, num) {
    montante = montante(p, num)
    return montante - num
}

module.exports = { montante, juros }