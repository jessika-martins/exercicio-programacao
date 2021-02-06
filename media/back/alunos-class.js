
// Criação da classe Aluno
module.exports = class Aluno{
    constructor(nome,ra,nota1,nota2){
        this._nome = nome
        this._ra= ra
        this._nota1= nota1
        this._nota2= nota2
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        return this._nome =nome;
    }
    get ra(){
        return this._ra;
    }
    set ra(ra){
        return this._ra = ra;
    }
    get nota1(){
        return this._nota1;
    }
    set nota1(nota1){
        return this._nota1= nota1;
    }
    get nota2(){
        return this._nota2;
    }
    set nota2(nota2){
        return this._nota2 =nota2
    }
 
}
