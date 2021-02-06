function media(nota1, nota2){
     valor = (nota1+nota2)/2
    if (valor>=50){
        return true
    }else{
        return false
    }
}

module.exports = {media}

//console.log(media())
