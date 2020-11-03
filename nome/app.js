function nome(e) {
    let resultado = e + " Martins";
    return resultado;
}

function sobrenome(nome) {
    let sobrenome = " Silva";
    return nome + sobrenome;
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;