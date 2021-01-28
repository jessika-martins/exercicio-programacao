function juros(p,num){
   valor = ((p/100)* num)+num
    jurosT = valor - num
    return jurosT
}

module.exports.juros = juros